import { useState } from "react";
import { db } from '../service/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { AssignmentInd, Email, Phone } from "@mui/icons-material";
import { Checkbox, Container, Divider, FormGroup, FormHelperText, Stack } from "@mui/material";
import MaskedInput from "react-text-mask";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    terms: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [segments, setSegments] = useState([]);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    if (name === "terms") {
      setState({
        ...state,
        [event.target.name]: checked,
      });
    } else {
      setState({
        ...state,
        [event.target.name]: value,
      });
    }
  };

  const handleCheck = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSegments((prevValues) => [...prevValues, value]);
    } else {
      setSegments((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };

  const phoneMask = [
    "(",
    /[1-9]/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'O nome precisa ter pelo menos 3 caracteres'),
    phone: Yup.string().test('phone', 'Telefone inválido. O telefone deve ter 10 ou 11 dígitos.', (value) => {
      const telefoneSemMascara = value.replace(/\D/g, '');
      return telefoneSemMascara.length === 10 || telefoneSemMascara.length === 11;
    }),
    email: Yup.string().email('O Email digitado é inválido'),
    terms: Yup.bool().oneOf([true], 'Para prosseguir, por favor, aceite os termos.')
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    validationSchema
      .validate(state, { abortEarly: false })
      .then(() => {
        try {
          addDoc(collection(db, 'clients'), {
            name: state.name,
            email: state.email,
            phone: state.phone,
            segments: segments,
            created: Timestamp.now()
          });
          setSubmitted(true);
        } catch (err) {
          alert(err);
        }
      })
      .catch((validationErrors) => {
        const errors = {};
        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setFormErrors(errors);
      });
  };

  const { name, email, phone, terms } = state;

  return (
    <div>
      {submitted ? (
        <div>Enviado</div>
      ) : (
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          useFlexGap="true"
          spacing={{ xs: 1, sm: 2, md: 1 }}
          justifyContent="center"
          alignItems="center"
        >
          <Container maxWidth="xs">
            <h2>CONTATO</h2>
            <h3>
              Preencha o formulário ao lado que entraremos em contato o mais
              rápido possível.
            </h3>
          </Container>
          <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                required
                label="Seu nome"
                variant="outlined"
                margin="normal"
                fullWidth
                name="name"
                value={name}
                error={Boolean(formErrors.name)}
                helperText={formErrors.name}
                onChange={handleChange}
                InputProps={{ startAdornment: <AssignmentInd /> }}
              />
              <TextField
                id="outlined-basic"
                label="Seu melhor e-mail"
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
                value={email}
                error={Boolean(formErrors.email)}
                helperText={formErrors.email}
                onChange={handleChange}
                InputProps={{ startAdornment: <Email /> }}
              />
              <TextField
                id="outlined-basic"
                required
                label="Telefone (WhatsApp)"
                fullWidth
                margin="normal"
                variant="outlined"
                name="phone"
                value={phone}
                error={Boolean(formErrors.phone)}
                helperText={formErrors.phone}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <Phone />,
                  inputComponent: MaskedInput,
                  inputProps: { mask: phoneMask }
                }}
              />
              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel id="demo-radio-buttons-group-label">
                  Categoria
                </FormLabel>
                <FormGroup onChange={handleCheck}>
                  <FormControlLabel
                    value="bolsas"
                    control={<Checkbox />}
                    label="Bolsas"
                  />
                  <FormControlLabel
                    value="cintos"
                    control={<Checkbox />}
                    label="Cintos"
                  />
                  <FormControlLabel
                    value="carteiras"
                    control={<Checkbox />}
                    label="Carteiras"
                  />
                  <FormControlLabel
                    value="bijuterias"
                    control={<Checkbox />}
                    label="Bijuterias"
                  />
                </FormGroup>
              </FormControl>
              <FormControl error={Boolean(formErrors.terms)}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="terms"
                      checked={terms}
                      onChange={handleChange}
                    />
                  }
                  label="Aceito os termos e condições"
                />
                <FormHelperText>{formErrors.terms}</FormHelperText>
              </FormControl>
              <Button fullWidth type="submit" variant="contained">
                Enviar
              </Button>
            </form>
          </Container>
        </Stack>
      )}
    </div>
  );
};
