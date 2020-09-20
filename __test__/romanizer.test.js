import {transformValue} from "../src/romanizer"

describe('transformer',()=>{
  it('should return x when input is 10',()=>{
    
    expect(transformValue(10)).toEqual('X');
  });
});