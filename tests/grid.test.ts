/* eslint-disable no-var */
import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

describe("Load AG Grid", () => {
  before(() => {
    Page.open();
  });

  it("Should display the grids", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if element is displayed.
     */
    GridPage.columnHeader.forEach((el) => {
      expect(el.isDisplayed()).to.eql(true);
    });
  });

  it("validate primary Columns headers should have following texts-Test1", () => {
    GridPage.mainGrid.waitForDisplayed();
    console.log(GridPage.columnheaderTextCandidate.isDisplayed());

    const participantText = GridPage.columnheaderTextCandidate.getText();
    expect(participantText).equal("Participant");

    console.log(GridPage.columnheaderTextChoiceGame.isDisplayed());

    const gameOfChoiceText = GridPage.columnheaderTextChoiceGame.getText();
    expect(gameOfChoiceText).equal("Game of Choice");

    console.log(GridPage.columnheaderTextPerf.isDisplayed());

    const performanceText = GridPage.columnheaderTextPerf.getText();
    expect(performanceText).equal("Performance");

    GridPage.columnheaderTextBreakdownByMonth.scrollIntoView();
    console.log(GridPage.columnheaderTextBreakdownByMonth.isDisplayed());

    const MonthlyBreakdownText = GridPage.columnheaderTextBreakdownByMonth.getText();
    expect(MonthlyBreakdownText).equal("Monthly Breakdown");

    // console.log(GridPage.columnheaderTextChoiceGame.getText());
    //console.log(GridPage.columnheaderTextChoiceGame.isDisplayed());
  });

  it("Validate that the Primary Column Headers are available in the Columns Sidebar options-Test2", () => {
    GridPage.mainGrid.waitForDisplayed();
    /*Used localeCompare to verify column headeres are in sidebar options
/*Secondary Column - Name */
    const primaryColHeaderString_participant = GridPage.columnheaderTextCandidate.getText();
    console.log(primaryColHeaderString_participant);

    GridPage.Primary_sidebarOptions_Candidates.scrollIntoView();
    const sideHeaderString_participant = GridPage.Primary_sidebarOptions_Candidates.getText();
    console.log(sideHeaderString_participant);
    console.log(
      "Strings comparision from Column header to Sidebaroptions-Participant"
    );
    console.log(
      primaryColHeaderString_participant.localeCompare(
        sideHeaderString_participant
      )
    );
    var result = primaryColHeaderString_participant.localeCompare(
      sideHeaderString_participant
    );

    if (result < 0) {
      console.log("strings are not equal");
    } else if (result > 0) {
      console.log("strings are not equal");
    } else {
      console.log(
        "Primary Column Headers are available in the Columns Sidebar options"
      );
    }

    /*Secondary Column - Language */

    const primaryColHeaderString_GameOfChoice = GridPage.columnheaderTextChoiceGame.getText();
    console.log(primaryColHeaderString_GameOfChoice);

    GridPage.Primary_sidebarOptions_gameOfChoice.scrollIntoView();
    const sideHeaderString_gameOfChoice = GridPage.Primary_sidebarOptions_gameOfChoice.getText();
    console.log(sideHeaderString_gameOfChoice);
    console.log(
      "Strings comparision from Column header to Sidebaroptions-gameOfChoice"
    );
    result = primaryColHeaderString_GameOfChoice.localeCompare(
      sideHeaderString_gameOfChoice
    );
    if (result < 0) {
      console.log("strings are not equal");
    } else if (result > 0) {
      console.log("strings are not equal");
    } else {
      console.log(
        "Primary Column Headers are available in the Columns Sidebar options"
      );
    }

    /*Secondary Column - Performance  */
    const primaryColHeaderString_performance = GridPage.columnheaderTextPerf.getText();
    console.log(primaryColHeaderString_performance);

    GridPage.Primary_sideOption_Perf.scrollIntoView();
    const sideHeaderString_performance = GridPage.Primary_sideOption_Perf.getText();
    console.log(sideHeaderString_performance);
    console.log(
      "Strings comparision from Column header to Sidebaroptions-Performance"
    );
    result = primaryColHeaderString_performance.localeCompare(
      sideHeaderString_performance
    );
    if (result < 0) {
      console.log("strings are not equal");
    } else if (result > 0) {
      console.log("strings are not equal");
    } else {
      console.log(
        "Primary Column Headers are available in the Columns Sidebar options"
      );
    }

    /*Secondary Column - Monthly Breakdown  */
    const primaryColHeaderString_breakdown = GridPage.columnheaderTextBreakdownByMonth.getText();
    console.log(primaryColHeaderString_breakdown);

    GridPage.Primary_sidebarOptions_BreakdownByMonth.scrollIntoView();
    const sideHeaderString_monthlyBreakdown = GridPage.Primary_sidebarOptions_BreakdownByMonth.getText();
    console.log(sideHeaderString_monthlyBreakdown);
    console.log(
      "Strings comparision from Column header to Sidebaroptions-monthlyBreakdown"
    );
    result = sideHeaderString_monthlyBreakdown.localeCompare(
      primaryColHeaderString_breakdown
    );
    if (result < 0) {
      console.log("strings are not equal");
    } else if (result > 0) {
      console.log("strings are not equal");
    } else {
      console.log(
        "Primary Column Headers are available in the Columns Sidebar options"
      );
    }
  });

  it("Grab Secondary column headers should have same text as sidebar options-Test3", () => {
    GridPage.mainGrid.waitForDisplayed();

    /*grab sec header name and should have sametext  to sidebar options-Name*/
    const secondaryColHeaderString = GridPage.secondary_CH_Name.getText();
    console.log(secondaryColHeaderString);

    GridPage.secondary_sideOption_name.scrollIntoView();
    const sec_sideOptionsStringname = GridPage.secondary_sideOption_name.getText();
    console.log(sec_sideOptionsStringname);
    console.log("Strings comparision");
    console.log(
      secondaryColHeaderString.localeCompare(sec_sideOptionsStringname)
    );
    /*grab sec header name and should have sametext  to sidebar options-language*/

    const secondaryColHeaderString_lang = GridPage.secondaryCH_Lang.getText();
    console.log(secondaryColHeaderString_lang);

    GridPage.secondary_sideOption_lang.scrollIntoView();
    const sec_sideOptionsStringlanguage = GridPage.secondary_sideOption_lang.getText();
    console.log(sec_sideOptionsStringlanguage);
    console.log("Strings comparision");
    console.log(
      secondaryColHeaderString_lang.localeCompare(sec_sideOptionsStringlanguage)
    );

    /*grab sec header name and should have sametext  to sidebar options-country*/

    const secondaryColHeaderString_country = GridPage.secondaryCH_Country.getText();
    console.log(secondaryColHeaderString_country);

    GridPage.secondary_sidebarOptions_country.scrollIntoView();
    const sec_sideOptionsStringCountry = GridPage.secondary_sidebarOptions_country.getText();
    console.log(sec_sideOptionsStringCountry);
    console.log("Strings comparision");
    console.log(
      secondaryColHeaderString_country.localeCompare(
        sec_sideOptionsStringCountry
      )
    );
  });

  it("Input text such as gil,tony,isabella and verify return result is displayed-Test4", () => {
    GridPage.mainGrid.waitForDisplayed();

    GridPage.inputNameField.click();
    browser.pause(3000);

    /*enter name for Gil*/

    GridPage.inputNameField.setValue("gil");
    browser.pause(3000);

    /*return first row values*/
    const gilText = GridPage.returnResultingRowsAfterSearch.isDisplayed();
    expect(gilText).to.equal(true);

    /*enter name for Tony*/

    GridPage.inputNameField.clearValue();
    GridPage.inputNameField.setValue("tony");
    browser.pause(5000);

    /*return first row values*/
    const tonyText = GridPage.returnResultingRowsAfterSearch.isDisplayed();
    expect(tonyText).to.equal(true);

    /*Enter name for Isabella*/

    GridPage.inputNameField.clearValue();
    GridPage.inputNameField.setValue("Isabella");
    browser.pause(3000);

    /*return first row values*/
    const IsabellaText = GridPage.returnResultingRowsAfterSearch.isDisplayed();
    expect(IsabellaText).to.equal(true);

    /*Enter name for Poppy*/

    GridPage.inputNameField.clearValue();
    GridPage.inputNameField.setValue("Poppy");
    browser.pause(3000);

    /*return first row values*/
    const poppyText = GridPage.returnResultingRowsAfterSearch.isDisplayed();
    expect(poppyText).to.equal(true);
  });

  /*Test 5 works upto entering values less than 5000 ,after entering 5000 it is not returning result while automaitng
so only it is failing */

  it("Click on oct filter and enter value less than 5000-Test5", () => {
    GridPage.mainGrid.waitForDisplayed();
    //GridPage.clickOnOctFilter.scrollIntoView();

    //GridPage.clickOnOctFilter.click();
    const eleFilter = $(
      "//*[@class='ag-floating-filter-button-button']/../../../div[8]/div[@class='ag-floating-filter-button']"
    );
    eleFilter.scrollIntoView();
    browser.pause(3000);
    eleFilter.click();
    browser.pause(5000);
    /*select dropdown lessthan*/

    //const eleEquals=$("//*[@aria-describedby='1367-display']/div[text()='Equals']");
    const eleEquals = $(
      "(//*[@class='ag-filter-wrapper ag-focus-managed']/div/div/div/div[text()='Equals'])[1]"
    );
    eleEquals.scrollIntoView();

    eleEquals.click();
    browser.pause(3000);
    browser.keys("Down arrow");
    browser.pause(2000);
    browser.keys("Down arrow");
    browser.pause(3000);
    browser.keys("Enter");
    browser.pause(3000);

    /*input for value 5000*/
    const filterInput = $(
      "(//div[@class='ag-filter-body']/div/div/input[@type='number'])[1]"
    );
    filterInput.scrollIntoView();
    browser.pause(3000);
    filterInput.click();
    browser.pause(3000);
    filterInput.setValue(5000);
    browser.pause(3000);
    filterInput.click();
    //eleEquals.selectByIndex(3);
    //GridPage.selectLessThanDropdown.click();
    //browser.pause(3000);
    //GridPage.selectLessThanDropdown.selectByVisibleText("Less than");

    /*validate result less than 5000*/

    const row1_result = $("(//div[@row-index=1])[1]/div[@col-id='oct']");
    row1_result.scrollIntoView();

    const rowresult1 = row1_result.getText();
    console.log(rowresult1);

    const row2_result = $("(//div[@row-index=1])[2]/div[@col-id='oct']");

    row2_result.scrollIntoView();
    const rowresult2 = row2_result.getText();
    console.log(rowresult2);

    const row3_result = $("(//div[@row-index=1])[3]/div[@col-id='oct']");
    row3_result.scrollIntoView();
    const rowresult3 = row3_result.getText();
    console.log(rowresult3);

    const row4_result = $("(//div[@row-index=1])[4]/div[@col-id='oct']");
    row4_result.scrollIntoView();
    const rowresult4 = row4_result.getText();
    console.log(rowresult4);

    const value = 5000;
    //let number = 1;
    if (parseInt(rowresult1) < value) {
      console.log("Return result value is lesser then 5000");
    }
  });
});
