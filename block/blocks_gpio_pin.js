module.exports = function(Blockly) {
  'use strict';

  Blockly.Blocks['gpio_digital'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("digital")
          .appendField(new Blockly.FieldDropdown([
            ["D2","2"], 
            ["D3","3"], 
            ["D4","4"], 
            ["D5","5"],
            ["D6","6"], 
            ["D7","7"],
            ["D8","8"], 
            ["D9","9"],
            ["D10","10"],
            ["D11","11"],
            ["D12","12"],
            ["D13","13"], 
            ["D14","14"], 
            ["D15","15"], 
            ["D16","16"],
            ["D17","17"], 
            ["D18","18"],
            ["D19","19"], 
            ["D20","20"],
            ["D21","21"],
            ["D22","22"],
            ["D23","23"],
            ["D24","24"], 
            ["D25","25"], 
            ["D26","26"], 
            ["D27","27"],
            ["D28","28"], 
            ["D29","29"],
            ["D30","30"], 
            ["D31","31"],
            ["D32","32"],
            ["D33","33"],
            ["D34","34"],
            ["D35","35"], 
            ["D36","36"], 
            ["D37","37"], 
            ["D38","38"],
            ["D39","39"], 
            ["D40","40"],
            ["D41","41"], 
            ["D42","42"],
            ["D43","43"],
            ["D44","44"],
            ["D45","45"],
            ["D46","46"],
            ["D47","47"],
            ["D48","48"],
            ["D49","49"],
            ["D50","50"],
            ["D51","51"],
            ["D52","52"],
            ["D53","53"]]), 
            "PIN");
      this.setOutput(true, "Number");
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['gpio_analog'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("analog")
          .appendField(new Blockly.FieldDropdown([
            ["A0","A0"], 
            ["A1","A1"], 
            ["A2","A2"], 
            ["A3","A3"],
            ["A4","A4"],
            ["A5","A5"],
            ["A6","A6"],
            ["A7","A7"],
            ["A8","A8"],
            ["A9","A9"],
            ["A10","A10"],
            ["A11","A11"], 
            ["A12","A12"], 
            ["A13","A13"], 
            ["A14","A14"], 
            ["A15","A15"]]), 
            "PIN");
       this.setOutput(true, "Number");
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['gpio_i2c'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("I2C")
          .appendField(new Blockly.FieldDropdown([
            ["SDA","20"],  
            ["SCL","21"]]), 
            "PIN");
       this.setOutput(true, "Number");
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['gpio_spi'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("SPI")
          .appendField(new Blockly.FieldDropdown([
            ["CS","53"],  
            ["MOSI","51"],  
            ["MISO","50"],  
            ["SCK","52"]]), 
            "PIN");
       this.setOutput(true, "Number");
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['gpio_analog_pin'] = {
    init: function() {
      this.appendDummyInput().
      appendField("Analog pin ").
      appendField(new Blockly.FieldDropdown([
        ["A0","A0"], 
        ["A1","A1"], 
        ["A2","A2"], 
        ["A3","A3"],
        ["A4","A4"],
        ["A5","A5"],
        ["A6","A6"],
        ["A7","A7"],
        ["A8","A8"],
        ["A9","A9"],
        ["A10","A10"],
        ["A11","A11"], 
        ["A12","A12"], 
        ["A13","A13"], 
        ["A14","A14"], 
        ["A15","A15"]]), 
        "pin");
      this.setOutput(true, "AnalogPIN");
      this.setColour(180);
      this.setTooltip("Analog pin");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['gpio_pwm_pin'] = {
    init: function() {
      this.appendDummyInput().
      appendField("PWM pin ").
      appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["44", "44"],
        ["45", "45"],
        ["46", "46"]]), "pin");
      this.setOutput(true, "PWMPIN");
      this.setColour(180);
      this.setTooltip("PWM pin");
      this.setHelpUrl("");
    }
  };
};