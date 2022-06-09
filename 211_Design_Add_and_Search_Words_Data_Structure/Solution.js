
var WordDictionary = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this.trie;
    word.split('').forEach(char => {
        if (!curr[char]) {
            curr[char] = {};
        }
        curr = curr[char];
    })
    
    curr.isEnd = true; 
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.dfs(word, 0, this.trie);
};

WordDictionary.prototype.dfs = function(word, index, node) {
    if (index == word.length) return node.isEnd == true;
    
    if (word[index] == '.') {
        for (let property in node) {
            if (this.dfs(word, index + 1, node[property])) { 
                return true; 
            }                            
        }
    }
    else 
    {
        if (node[word[index]] != null) {
            return this.dfs(word, index + 1, node[word[index]]);
        } 
    }
    return false; 
};
