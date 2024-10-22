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

    search(word: string): boolean {
        let node = this.root;
        for (let c of word) {
            let index = this.getIndexForChar(c);
            if (!node.children[index]) {
                return false; // Word not found
            }
            node = node.children[index];
        }
        return node.isEndOfWord; // Return true if word exists, false otherwise
    }

    delete(word: string): void {
        let node = this.root;
        for (let c of word) {
            let index = this.getIndexForChar(c);
            if (!node.children[index]) {
                return; // Word not found
            }
            node = node.children[index];
        }
        node.isEndOfWord = false;
    }

    find(prefix: string): string[] {
        let node = this.root;
        const list: string[] = [];

        // 1. Get the node for the given prefix
        for (let c of prefix) {
            let index = this.getIndexForChar(c);
            if (!node.children[index]) {
                return list; // No words found with this prefix
            }
            node = node.children[index];
        }

        // 2. Run a DFS from the node to build up list of words that match prefix
        this.dfs(node, list, prefix);

        return list;
    }

    private dfs(node: TrieNode, list: string[], word: string) {
        if (node.isEndOfWord) {
            list.push(word);
        }

        for (const [idx, childNode] of node.children.entries()) {
            if (childNode) {
                const ch = String.fromCharCode("a".charCodeAt(0) + idx);
                this.dfs(childNode, list, word + ch);
            }
        }
    }

    private getIndexForChar(char: string) {
        return char.charCodeAt(0) - "a".charCodeAt(0);
    }
}
