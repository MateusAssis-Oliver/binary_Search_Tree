//MINI DICIONARIO
/*
ROOT = RAIZ
ATA = DADOS

*/


/* 

Iremos começar, criando uma classe chamada nó,
que nos dara apoio para a criação da Árvore Binária:

*/
class No {

     //o NO que criamos possui recebe 3 parametros, data(DADO) E mais duas propriedades: esquerda e direita, que possuem valor nulo
    
    constructor(data, esquerda = null, direita = null) {
        this.data = data;
        this.esquerda = esquerda;
        this.direita = null;
    }
}

//Aqui criamos a Àrvore
class ArvoreBuscaBinaria {

    //A árvore possui um root ( raiz ), que é definido como tendo valor nulo pelo construtor.
    constructor(root = null) { this.root = null; }

    /* 
    
    Com o método Insercao(data), inseriremos um novo nó na nossa árvore binária com o valor especificado.
    Esse método ira cria um nó a ser inserido e fara a chmada  do método InserirNo para executar a ação.
    Com isso precisamos: Criar um novo nó e inicializá-lo com o dado a ser utilizado e, se a raiz estiver vazia, esse novo dado será a raiz da árvore.
    Senão, iremos faser a chamada  do método InserirNo para achar a posição correta na árvore e adicionar o nó.
    
    */
    Insercao(data) {

        //novoNo passa a ter um NO  dentro dele
        let novoNo = new No(data);

        //se a rais for igual a null , a rais recebe o novoNO
        if (this.root === null) { this.root = novoNo; }

        //Se a rais não for igual a null o metodo InserieNo é chamado passando a rais e novoNo como parametro
        else { this.InserirNo(this.root, novoNo); }
    }



    //InserirNo(no, novoNo):

    /* 
    
    O método InserirNo(no, novoNo) verifica em qual parte da árvore o nó deve ser inserido e coloca-o no lugar correto.
    Se o dado a ser inserido for menor que o nó raiz, o novo dado deve ir para a esquerda.
    Senão, o novo dado deve ir para a direita.
    O mesmo vale para os outros nós que já estão posicionados, ou seja, acontece uma comparação dos dados fornecidos com os dados do nó atual,
    movendo-se para a esquerda ou para a direita e recorrendo até encontrar um nó correto para qual o novo nó possa ser adicionado.
    
    
    */
    InserirNo(no, novoNo) {

        //Verifica se o valor do novoNo é menor do que a raiz,  * SE FOR MENOR    
        if (novoNo.data < no.data) {
            //se o lado esquerdo da rais estiver vazio ele recebera o novoNo
            if (no.esquerda === null) { no.esquerda = novoNo; }
            //Se ele não estiver vazio, ira fazer uma chamada recursiva para assim cliar o novoNo na arvore
            else { this.InserirNo(no.esquerda, novoNo); }
        }

        //Se o valor do novoNo for maior do que a raiz
        else {
            //Se o lado direiro da rais estiver vazio ele recebebe o novo NO            
            if (no.direita === null) { no.direita = novoNo; }

            //Se ele não estiver vazio, ira fazer uma chamada recursiva para assim cliar o novoNo na arvore
            else { this.InserirNo(no.direita, novoNo); }
        }
    }


    /* 
    
      Para remover dados da nossa árvore binária, utilizamos os métodos Remover(data) e RemoverNo(no, key).
  O método Remover chama o método RemoverNo passando o nó raiz e dados fornecidos, atualizando a raiz da árvore com o valor que é retornado pela função.
  O método RemoverNo procura um nó com o dado passado e executa as etapas para excluí-lo. Podemos excluir um nó passando por três cenários diferentes:
  
  # Apenas um nó folha, que é um nó que não possui filhos. Eles são facilmente removidos.
  
  # Um nó com filho, que se o nó tiver um filho na parte esquerda, atualizaremos o ponteiro (referência) do nó pai para o filho esquerdo do nó a ser excluído.
  O mesmo acontece com o filho da parte direita.
  
  #Um nó com dois filhos, onde encontramos o nó com valor mínimo na parte direita e substituímos esse nó pelo nó com valor mínimo e removemos da árvore.
  
  */
    Remover(data) { this.root = this.RemoverNo(this.root, data); }

    // O Metodo RemoveNo recebe a raiz e uma chave que é o dado
    RemoverNo(no, key) {

        //Se a raiz sestiver vazia retorna null
        if (no === null) { return null; }

        /*
        Se o valor da chave(dado) for maior do que o valor do dado da raaiz, o lado direiro da raiz recebe o retorno da chamada recursiva do metodo RemoveNO,
        logo apos o termno da recursividade retorna a raiz.
        */

        else if (key > no.data) { no.direita = this.RemoverNo(no.direita, key); return no; }

        else {

            //Se tanto o lado direito quanto o lado esquerdo forem  null a raiz recebe null e retorna a raiz
            if (no.esquerda === null && no.direita === null) { no = null; return no; }

            //Se apenas olado esquerdo for null a raiz recebe o NO do lado direito e retorno a raiz
            if (no.esquerda === null) { no = no.direita; return no; }

            //Se apenas olado direito for null a raiz recebe o NO do lado esquerdo e retorno a raiz
            else if (no.direita === null) { no = no.esquerda; return no; }

            let aux = this.EncontrarMenorNo(no.direita);

            no.data = aux.data;

            no.direita = this.RemoverNo(no.direita, aux.data);
            return no;
        }
    }

    EncontrarMenorNo(no){
        if (no.esquerda===null){
            return no;
        } else {
            return this.EncontrarMenorNo(no.esquerda);
        }
    }

    //Esse método percorre a árvore a partir de um nó. Percorre a subárvore esquerda, visita a raiz e percorre a subárvore direita.

    EmOrdem(no) {
        if (no !== null) {

            this.EmOrdem(no.esquerda);

            console.log(no.data);

            this.EmOrdem(no.direita);
        }
    }

   /*
   Esse método percorre a árvore visitando primeiro o nó raiz e, então, percorre a subárvore esquerda.
   Após percorrer o lado esquerdo, o método percorre a subárvore direita.
    */
   
   PreOrdem(no){
        if (no !== null){
            console.log(no.data);
            this.PreOrdem(no.esquerda);
            this.PreOrdem(no.direita);
        }
    }
/* 
Começa percorrendo a subárvore esquerda, depois, percorre a subárvore direita e por último, visita o nó root.
*/
    PosOrdem(no){
        if (no !== null){
            this.PosOrdem(no.esquerda);
            this.PosOrdem(no.direita);
            console.log(no.data);
        }
    }

    //Retorna o nó raiz da árvore
    EncontrarNoRaiz(){
        return this.root;
    }
    
    //Pesquisa o nó com dados que tenham o valor em toda a árvore:
    Pesquisar(no, data){
        if (no === null){return null;}

        else if (data < no.data){ return this.Pesquisar(no.esquerda, data);}
        else if (data > no.data){ return this.Pesquisar(no.direita, data);}
        else { return no;}
    }


};


let arvoreBinaria = new ArvoreBuscaBinaria(),
arrayNumAleatorios = [20,25,15,10,28,27,9,7,2,28];

for(let index = 0; index < arrayNumAleatorios.length;index++){
    arvoreBinaria.Insercao(arrayNumAleatorios[index])
};

let raiz = arvoreBinaria.EncontrarNoRaiz();

//Do menor para o maior

console.log('Em Ordem');
arvoreBinaria.EmOrdem(raiz);

console.log('Pos Ordem');
arvoreBinaria.PosOrdem(raiz);

arvoreBinaria.Remover(2);