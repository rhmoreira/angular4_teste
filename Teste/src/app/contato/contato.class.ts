export class Contato {
  nome: string;
  email: string;
  telefone: string;
  estado: string;
  empresa: string;
  mensagem: string;

  reset() {
    this.nome = null;
    this.email = null;
    this.telefone = null;
    this.estado = null;
    this.empresa = null;
    this.mensagem = null;
  }
}
