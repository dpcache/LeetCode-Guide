
var Trie = function() {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    word.split('').forEach((char)=>{
        if (!curr[char]) {
            //Creating object within object. 
            //Char as the property name
            curr[char] = {};
        }
        //Access char property/object 
        //Moving down the tree
        curr = curr[char];
    })
    //Insert("apple"), Insert("app") is end on both node should be true.
    curr.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.searchNode(word);
    //console.log(Object.keys(node)[0]);
    return (node!=null) ? (node.isEnd==true) : false ;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.searchNode(prefix);
    return node != null;
};

Trie.prototype.searchNode = function(word) {
    let node = this.root;
    for (let char of word.split('')) {
        if (node[char]) {
            node = node[char]
        } else {
            return null;
        }
    }
    return node;
}