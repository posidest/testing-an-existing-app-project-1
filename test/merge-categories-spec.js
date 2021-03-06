const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      //arrange
      let categories = [];

      //act
      const test = mergeCategories(template, categories, "li")
      expect(test).to.contain("<div>");
      expect(test).to.contain("</div>");
      expect(test).to.contain("<ul>");
      expect(test).to.contain("</ul>");
      expect(test).to.not.contain("<li>");
      expect(test).to.not.contain("</li>");
      //assert
      //expect().to.include()
    });

    it("should return a single <li> for one category", () => {
      //arrange
      const cats = ['boring'];

      // act
      const test = mergeCategories(template, cats, 'li');

      // assert

      expect(test).to.contain('<div>');
      expect(test).to.contain('</div>');
      expect(test).to.contain('<ul>');
      expect(test).to.contain("</ul>");
      expect(test).to.contain("<li>boring</li>");
    });

    it("should return an <li> for each category", () => {
      //arrrange
      const arr = "abc".split("")

      //act
      const test = mergeCategories(template, arr, "li");

      //assert
      expect(test).to.contain("<div>")
      expect(test).to.contain("</div>")
      expect(test).to.contain("<ul>")
      expect(test).to.contain("</ul>")
      expect(test).to.contain("<li>a</li>");
      expect(test).to.contain("<li>b</li>");
      expect(test).to.contain("<li>c</li>");
      expect(test).to.not.contain("<!-- Content here -->")
    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      const categories = [];

      const test = mergeCategories(template, categories, "option");

      expect(test).to.contain("<div>")
      expect(test).to.contain("</div>")
      expect(test).to.contain("<select>")
      expect(test).to.contain("</select>")

      expect(test).to.not.contain("<option>")
      expect(test).to.not.contain("</option>")

      expect(test).to.not.contain("<!-- Content here -->");
    });

    it("should return a single <option> for one category", () => {
      expect.fail('please write this test');
    });

    it("should return an <option> for each category", () => {
      expect.fail('please write this test');
    });
  });
});
