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

  const handleReset = () => {
    setSubmitted(false);
    setState({
      name: "",
      email: "",
      phone: "",
      terms: false
    });
    setFormErrors({});
    setSegments([]);
  };

  const { name, email, phone, terms } = state;

  return (
    <div id="contact">
      {submitted ? (
        <div className="submitted">
          <div className="submitted-icon">✓</div>
          <div className="submitted-message">Formulário enviado com sucesso!</div>
          <Button onClick={handleReset} variant="contained" color="primary">
            Enviar Novamente
          </Button>
        </div>
      ) : (
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          useFlexGap="true"
          spacing={{ xs: 1, sm: 2, md: 1 }}
          justifyContent="center"
          alignItems="center"
        >
          <Container maxWidth="xs">
            <h2 style={{ color: 'black' }}>CONTATO</h2>
            <h3 style={{ color: 'black' }}>
              Preencha o formulário ao lado que entraremos em contato o mais
              rápido possível.
            </h3>
          </Container>
          <Container maxWidth="sm" style={{ backgroundColor: 'transparent' }}>
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
                style={{ color: 'black' }}
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
                style={{ color: 'black' }}
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
                style={{ color: 'black' }}
              />
              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'black' }}>
                  Categoria
                </FormLabel>
                <FormGroup onChange={handleCheck}>
                  <FormControlLabel
                    value="bolsas"
                    control={<Checkbox />}
                    label="Bolsas"
                    style={{ color: 'black' }}
                  />
                  <FormControlLabel
                    value="cintos"
                    control={<Checkbox />}
                    label="Cintos"
                    style={{ color: 'black' }}
                  />
                  <FormControlLabel
                    value="carteiras"
                    control={<Checkbox />}
                    label="Carteiras"
                    style={{ color: 'black' }}
                  />
                  <FormControlLabel
                    value="bijuterias"
                    control={<Checkbox />}
                    label="Bijuterias"
                    style={{ color: 'black' }}
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
                      style={{ color: 'black' }}
                    />
                  }
                  label={
                    <>
                      Eu concordo com os{' '}
                      <a href="/components/pages/termosDeUso" target="_blank">
                        Termos de uso
                      </a>{' '}
                      e com as{' '}
                      <a href="/components/pages/politicaDePrivacidade" target="_blank">
                        Políticas de Privacidade
                      </a>
                      .
                    </>
                  }
                />
                <FormHelperText>{formErrors.terms}</FormHelperText>
              </FormControl>
              <Button fullWidth type="submit" variant="contained" style={{ color: 'black' }}>
                Enviar
              </Button>
            </form>
          </Container>
        </Stack>
      )}
      <style jsx>{`
        .submitted {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-top: 20px;
        }

        .submitted-icon {
          font-size: 48px;
          color: green;
        }

        .submitted-message {
          font-size: 24px;
          margin-top: 10px;
          text-align: center;
          color: black;
        }
      `}</style>
    </div>
  );
};
