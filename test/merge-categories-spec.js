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
      expect.fail('please write this test');
    });

    it("should return an <li> for each category", () => {
      expect.fail('please write this test');
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
      expect.fail('please write this test');
    });

    it("should return a single <option> for one category", () => {
      expect.fail('please write this test');
    });

    it("should return an <option> for each category", () => {
      expect.fail('please write this test');
    });
  });
});
