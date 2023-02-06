let idForm, nomeForm, numdepenForm, salarioForm, datanascForm;
const sURL = 'http://localhost:8081/api/funcionarios/';

window.onload = function (e) {
    idForm = document.querySelector('#iID');
    nomeForm = document.querySelector('#iNome');
    numdepenForm = document.querySelector('#iNumerodedependentes');
    salarioForm = document.querySelector('#iSalario');
    datanascForm - document.querySelector('#iDatanascimento');
};

async function incluirFuncionario() {
    const id = idForm.value;
    const nome = nomeForm.value; 
    const numerodedependentes = numdepenForm.value;
    const salario = salarioForm.value;
    const Datanascimento = datanascForm.value;

    axios.post(sURL, { id, nome, numerodedependentes, salario })
        .then(res => {
            res.data.toString = function() {
                return 'ID: ' + this.id + '\nNome: ' + this.nome +
                    '\nNumerodedependentes: ' + this.numerodedependentes + '\nSalario: ' + this.salario
                    + '\nDatanascimentos: ' + this.Datanascimento;
                }

            alert(res.data.toString());
            console.log(res.data);
            setTimeout(() => window.location.href = '/', 100);
        })
        .catch(res => console.log(res.response.data));
}