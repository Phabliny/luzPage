import { getStorage, ref, listAll, getDownloadURL  } from "firebase/storage";

// Função para listar todos os arquivos em um diretório específico
export async function listAllFiles() {
  try {
    const storage = getStorage(); // Obtendo o objeto storage através da função getStorage
    console.log(1)
    const storageRef = await ref(storage, '/images/');
    console.log(2)
    console.log(storageRef)
    const { items } = await listAll(storageRef);
    console.log(3)
    console.log(items)

    // items é um array contendo as referências a todos os arquivos no diretório
    const fileNames = items.map((item) => item.name);
    console.log(fileNames)
    return fileNames;
  } catch (error) {
    console.error('Erro ao listar os arquivos:', error);
    return [];
  }
}