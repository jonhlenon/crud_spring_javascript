const FRONT = 'http://localhost:5500/';
const API = 'http://localhost:8081/api/funcionarios/';

window.onload = function (e) {
    listarFuncionarios();
};

function criarTabela(funcionarios) {
    const corpoTabela = document.querySelector('#funcionarios');
    corpoTabela.innerHTML = '';

    if (funcionarios) {
        const linhas = funcionarios.map(funcionario => {
            const tdId = document.createElement('td');
            tdId.innerHTML = funcionario.id;
    
            const tdNome = document.createElement('td');
            tdNome.innerHTML = funcionario.nome;
    
            const tdNumerodedependentes = document.createElement('td');
            tdNumerodedependentes.innerHTML = funcionario.numerodedependentes;

            const tdSalario = document.createElement('td');
            tdSalario.innerHTML = funcionario.salario.toLocaleString('pt-BR', 
                                                            { 
                                                                currency: 'BRL', 
                                                                style: 'currency'
                                                            });

            const tdDatanascimento = document.createElement('td');
            tdDatanascimento.innerHTML = funcionario.datanascimento.toLocaleTimeString();
            logElem.innerHTML += `${timeStr}: ${msg}<br/>`});
    
            const acaoAlterar = document.createElement('a');
            acaoAlterar.innerHTML = 'Alterar';
            acaoAlterar.setAttribute('href', FRONT + 'alterar_funcionario.html?id=' + funcionario.id);
            acaoAlterar.classList.add('btn', 'btn-primary', 'me-2');
    
            const acaoExcluir = document.createElement('a');
            acaoExcluir.innerHTML = 'Excluir';
            acaoExcluir.classList.add('btn', 'btn-danger');

            acaoExcluir.addEventListener('click', function (event) {
                if (confirm('Tem certeza que deseja excluir?')) {
                    axios.delete(API + funcionario.id, { })
                        .then(res => {
                            //alert(res.data.mensagem);
                            listarFuncionarios();
                        });
                } 
            }, false);
    
            const tdAcoes = document.createElement('td');
            tdAcoes.appendChild(acaoAlterar);
            tdAcoes.appendChild(acaoExcluir);
    
            const tr = document.createElement('tr');
            tr.appendChild(tdId);
            tr.appendChild(tdNome);
            tr.appendChild(tdNumerodedependentes);
            tr.appendChild(tdSalario);
            tr.appendChild(tdDatanascimento);
            tr.appendChild(tdAcoes);
    
            return tr;
        };
        
        linhas.forEach(linha => corpoTabela.appendChild(linha));
    }

async function listarFuncionarios() {
    const res = await axios.get(API, {});

    console.log('Resposta do servidor:', res);
    criarTabela(res.data);
}