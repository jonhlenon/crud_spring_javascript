let id, idForm, nomeForm, numdepenForm, salarioForm, datanascForm;
const sURL = 'http://localhost:8081/api/funcionarios/';

window.onload = async function (e) {
    const query = window.location.search;
    const parametros = new URLSearchParams(query);
    id = parametros.get('id');

    idForm = document.querySelector('#iID');
    nomeForm = document.querySelector('#iNome');
    numdepenForm = document.querySelector('#iNumerodedependentes');
    salarioForm = document.querySelector('#iSalario');
    datanascForm = document.querySelector('#iDatanascimento');

    const produto = await buscarFuncianario(id);
    preencherForm(funcionario);
};

function preencherForm(funcionario) {
    idForm.value = funcinario.id;
    nomeForm.value = funcionario.nome;
    numdepenForm.value = funcionario.numerodedependentes;
    salarioForm.value = funcionario.salario;
    datanascForm.value = funcionario.Datanascimento;
}


async function buscarFuncinario(id) {
    const resposta = await axios.get(sURL + id);

    return resposta.data;
}

async function alterarFuncionario() {
    const id = idForm.value;
    const nome = nomeForm.value; 
    const numerodedependentes = numdepenForm.value;
    const salario = salarioForm.value;
    const Datanascimento = datanascForm.value;

    axios.put(sURL, { id, nome, numerodedependentes, salario, Datanascimento })
        .then(res => {
            alert(JSON.stringify(res.data));
            console.log(res.data);
            setTimeout(() => window.location.href = '/', 100);
        })
        .catch(res => console.log(res.response.data));
}