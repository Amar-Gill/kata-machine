class TrieNode {
    children: TrieNode[];
    isEndOfWord: boolean;

    constructor() {
        this.children = Array(26).fill(null); // Array to store children nodes for each character
        this.isEndOfWord = false; // Flag to indicate if this node is the end of a word
    }
}

export default class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node = this.root;

        for (let c of word) {
            let index = c.charCodeAt(0) - "a".charCodeAt(0); // Convert character to index

            if (!node.children[index]) {
                node.children[index] = new TrieNode(); // Create a new node if it doesn't exist
            }
            node = node.children[index];
        }

        node.isEndOfWord = true; // Mark the end of the word
    }

    delete(item: string): void {}

    find(partial: string): string[] {}
}

