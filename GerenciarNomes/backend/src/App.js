import express from 'express';
import cors from 'cors';
import { atualizarUmaPessoa, obterPessoas, removerPessoa, salvarPessoa } from './controllers/PessoaController.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/pessoa', obterPessoas);
app.post('/pessoa', salvarPessoa);
app.put('/pessoa/:id_pessoa', atualizarUmaPessoa)
app.delete('/pessoa/:id_pessoa', removerPessoa)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
