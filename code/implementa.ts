namespace pessoa{
    let m = new Medico("Gzus","222.222.222-22");
    m.setCrm(50);
    m.setEspecialidade("Ressurreição");

    document.getElementById("nomeM").textContent = m.getNome();
    document.getElementById("cpfM").textContent = m.getCpf();
    document.getElementById("crmM").textContent = m.getCrm().toString();
    document.getElementById("especialidadeM").textContent = m.getEspecialidade();
}