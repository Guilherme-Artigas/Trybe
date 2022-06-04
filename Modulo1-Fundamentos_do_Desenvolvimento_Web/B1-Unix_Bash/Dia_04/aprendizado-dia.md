# Dia 4 🌧️ ❄️

Nesse dia 4, o segundo dia de conteúdo do curso, continuamos o assunto sobre comandos no terminal, porem agora um pouco mais aprofundados e familiarizados com a temida telinha preta.

### Aprendemos sobre: 

- Utilizar o comando **find**;
- Utilizar os operadores **>** (maior), **>>** (maior maior) e **|** (pipe) no terminal;
- Alterar as permissões de arquivos e diretórios;
- Verificar o status e enviar sinais a processos Unix;

### Por que isso é importante? 🤔

Conhecer variáveis de ambiente e saber como usá-las em nosso código é uma das principais habilidades que iremos usar para trazer flexibilidade e segurança em nosso código. Imagine que precisaremos fazer um script que se conecte a uma maquina remota, e precise de usuário e senha. Deveríamos colocar a senha direto no script?

Quando se trabalha usando o terminal, cada comando que digitamos é executado dentro de um processo. Então é importante saber como podemos se comunicar com tais processos quando, por exemplo, quiser terminar a execução de algum que esteja travado.

Conhecer sobre permissões é uma outra habilidade importante para garantir que os arquivos que manipulamos na maquina (código, configurações, etc) não sejam alterados ou executados por pessoas indesejadas.

### Anotações das aulas...

## Lista de comandos aprendidos na video aula 1 do dia 4 de conteúdos - Unix & Bash - Parte 2 📘

**cat arquivo** - Exibe todo o conteúdo de um arquivo a partir da primeira linha.

**cat** - Recebe valores como inputs.
para sair do comando cat usamos o **ctrl + D**.

**cat** > nomedoarquivo.extensão - Cria um arquivo, direcionando a entrada para um arquivo.

**cat >> arquivo** - Edita e acrescenta mais valores em um determinado arquivo.

**cat arquivo arquivo > destino** - Conseguimos pegar o conteúdo de dois arquivos e criar um terceiro arquivo.

#### Ordenar de forma alfabética

**sort < arquivo** - Ordena somente para visualização, sem alterar originalmente o arquivo.

**sort < arquivo > destino** - ordena as informações e cria um novo arquivo com as informações ordenada em ordem alfabética.

**who** - Mostra quem está usando o sistema.

**who | sort** - Mostra todos os usuários do sistema de forma ordenada.

**who | wc -l** - Mostra a quantidade de usuários no sistema.

## Lista de comandos aprendidos na video aula 2 do dia 4 de conteúdos - Unix & Bash - Parte 2 📕

Nessa aula falamos sobre as permissões que os usuários tem sobre os arquivos.

**ls -l** - Exibe detalhes de arquivos e pastas em um diretório.
**R** - Leitura permitida do arquivo ou diretório (Read).
**W** - Editar um arquivo ou modificar o conteúdo de um diretório (Write).
**X** - Permite executar um arquivo ou acessar um diretório pelo comando cd (Execute).

**Hífen** - No inicio da sequencia indica um arquivo comum.
**D** - No inicio da sequencia indica um diretório.

### Podemos separar em 4 grupos.

* Primeira parte (Vai dizer se é um arquivo comum ou um diretório).
Se começar com hífen significa que é um arquivo comum.
Se começar com D significa que é um diretório.

* Segunda Parte (Vai dizer quais são as permissões do usuário).
* Terceira parte (Vai dizer quais são as permissões do grupo).
* Quarta parte (Vai dizer quais são as permissões de outros usuários).

### Comandos que alteram as permissões

**chmod** - Podemos alterar as permissões do nosso arquivo.
**chmod u** - Atribui as permissões apenas a o usuário.
**chmod g** - Atribui as permissões para um grupo.
**chmod o** - Atribui as permissões outros usuários.
**chmod a** - Atribui as permissões para todo mundo.

#### Temos 3 opções...

**chmod u-** - Retirar alguma permissão.
**chmod u+** - Acrescenta alguma permissão.
**chmod u-** - Se quisermos deixar exatamente igual a condição que agente quer.

## Lista de comandos aprendidos na video aula 3 do dia 4 de conteúdos - Unix & Bash - Parte 2 📗

- **ps** - Lista de processos sendo executados.
- **sleep 5** - Coloca o terminal para dormir.
- **sleep 10 &** - Criar processos e deixar em background.
- **ctrl + z** - Pausa o comando atual.
- **fg** - Retorna em primeiro plano.
- **bg** - Retorna em segundo plano.
- **jobs** - Exibe todos os processos executados.
- **ctrl + c** - Encerrar um processo.
- **kill %[numero do processo]** - Matar processo em background.
- **kill [numero do PID]** - Matar processo pelo PID dele.
- **kill -9 [numero do processo]** - Forçar algum processo ser finalizado.
- **find [name],[date],[size],[type]** - Pesquisa em diretórios por arquivos ou outras pastas.
