document.getElementById('generate-btn').addEventListener('click',function(){
const name =prompt("Entre your name:");
if(name){
    generateCertificate(name);

}
});
function generateCertificate(name){
    const doc =new jsPDF();
    doc.text(Certificate Of Completion ,20,20);
    doc.text(This Certificate that ${name}has completed the CountQueuingStrategy.apply,20,30);
    doc.save('certificate.pdf');
}
