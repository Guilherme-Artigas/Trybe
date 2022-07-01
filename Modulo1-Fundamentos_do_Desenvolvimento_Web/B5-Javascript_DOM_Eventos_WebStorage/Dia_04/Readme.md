# Dia 04 ☀️

Prosseguindo com os assunto de **Javascript**, hoje falamos sobre **Web Storage**, esse mecanismo possibilita que as aplicações web possam salvar dados nos navegadores dos usuários.

Antes do HTML 5, as aplicações tinham que salvar os dados locais em cookies, que eram enviados para o servidor a cada requisição do browser. **Web Storage** é mais seguro e tem a capacidade de salvar uma quantidade maior de dados sem afetar o desempenho da página.

Ao contrário dos **Cookies**, o limite de armazenamento é muito maior (pelo menos 5MB), e as informações não são transferidas para o servidor durante as requisições.

**Web Storage** é por origem (por domínio e protocolo). Todas as páginas de uma origem podem salvar e acessar os mesmos dados. Por exemplo, se o domínio betrybe.com salva o dado x no **Web Storage**, o dominío course.betrybe.com consegue ler esse dado x.

## Lista de assuntos do dia: ✏️

- [x] Manipular o objeto localStorage
- [x] Manipular o objeto sessionStorage
