const { MarkovMachine } = require("./markov");

describe('markov tests', function() {
    let text;
    let markovMachine;
    beforeEach(function() {
        text = 'The cat sat on the mat';
        markovMachine = new MarkovMachine(text);
    });

    test('should create a MarkovMachine object', function() {
        expect(markovMachine).toBeDefined();
        expect(markovMachine instanceof MarkovMachine).toBe(true);
    });

    test("should generate a random text from the Markov chains", function() {
        const generatedText = markovMachine.makeText(10);

        expect(generatedText).toBeDefined();
        expect(generatedText.length).toBeGreaterThan(0);
    });

    test('should generate a random text that is different from the original text', function() {
        const generatedText = markovMachine.makeText(10);
      
        expect(generatedText).not.toEqual(text);
      });
});