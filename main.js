const {Blockchain, Mail} = require("./blockchain");

new_blockchain = new Blockchain();
new_blockchain.createMail(new Mail("addr1", "addr2", "test1"));
new_blockchain.createMail(new Mail("addr2", "addr1", "test2"));
new_blockchain.createMail(new Mail("addr3", "addr4", "test3"));

console.log("\nStarting Miner...");
new_blockchain.minePendingMail();
addr1_mail = new_blockchain.getMailForAddress("addr1");
console.log("\nMail for Address 1:") 
for (let i = 0; i < addr1_mail.length; i++) {
    console.log("\nFrom: " + addr1_mail[i].from_addr);
    console.log("To: " + addr1_mail[i].to_addr);
    console.log("Data: " + addr1_mail[i].data);
}
