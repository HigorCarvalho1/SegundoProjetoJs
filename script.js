let students = [
{
    Name: "Higor",
    primeiraProva: 2.3,
    segundaProva: 5,
},
{
    Name: "Guilherme",
    primeiraProva: 3.2,
    segundaProva: 5.5,
},
{
    Name: "Kamila",
    primeiraProva: 10,
    segundaProva: 7.5,
},
{
    Name: "Vanilda",
    primeiraProva: 10,
    segundaProva: 10,
},
]
let option;
while(option != 2) {
    option =  Number(prompt(`
    Olá, Bem vindo a Fundação Vunesp.
    Concurso Nº 899 para Desenvolvedores Juniors

    Selecione a opção desejada
    1. Media dos alunos 
    2. Sair do programa
  `))
  switch(option){
    case 1:
        function media(primeira, segunda){
            return (primeira + segunda) /2
        }
        function mediaStudent(student){
               return `${media(student.primeiraProva, student.segundaProva)}`
            }
            for(let student of students) {
                const result = mediaStudent(student)
                if(result >= 7) {
                    alert(`
                    A media do(a) aluno(a) ${student.Name} é: ${result}
                    Parabéns! Você foi aprovado no concurso`)
            
                } else{
                    alert(`
                    A media do(a) aluno(a) ${student.Name} é: ${result}
                    Não foi desta vez! Mais sorte na proxima `)
                }
        }
        alert(`Os alunos aprovados deverão entrar em contato no numero (16)99395-6680`)
  break;
  case 2:
    alert("Bye Bye")
        break;
    default:
        alert("Opção invalida. Tente novamente")            
  }
}


        
