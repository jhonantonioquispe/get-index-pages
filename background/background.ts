function generatePages(totalPages: number, pagesBySheet: number) {
    let anverso: string = "";
    let reverso: string = "";
    for (let index = 1; index <= totalPages; ) {
        for (let ir = 1; ir <= pagesBySheet && index <= totalPages; ir++) {
            anverso=anverso+`${index},`;
            index++; 
        }
        for (let irev = 1; irev <= pagesBySheet && index <= totalPages ; irev++) {
            reverso=reverso+`${index},` 
            index++;
        }
    }
    console.log(anverso);
    console.log("\n");
    console.log(reverso);
}

generatePages(450,2);

// chrome.runtime.onInstalled.addListener(() => {
//   console.log("Extensión instalada y corriendo con typescript");
// });
