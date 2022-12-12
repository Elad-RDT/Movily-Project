import Dropdown from 'react-bootstrap/Dropdown';
import React, { Component } from 'react';
class BasicExample extends Component {
    state={
        arr:[{menu:'menu1'},{menu:'menu2', arrone:[{one:'option1',two:'option2'}]},{menu:'menu3',arrtwo:[{one:'option one',two:'option two', three:'option three',four:'option four'}]},{menu:'menu4', arrfo:[{one:'option1',two:'option2'}]}]
    }



    render() {
        return (
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.state.arr[0].menu}
              </Dropdown.Toggle>
        
              <Dropdown.Menu>

              <Dropdown>
                <Dropdown.Toggle>{
                    this.state.arr[1].menu}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item>{this.state.arr[1].arrone[0].one}</Dropdown.Item>
                <Dropdown.Item>{this.state.arr[1].arrone[0].two}</Dropdown.Item>
                </Dropdown.Menu>
                    </Dropdown>


                    <Dropdown>
                <Dropdown.Toggle>{
                    this.state.arr[2].menu}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item>{this.state.arr[2].arrtwo[0].one}</Dropdown.Item>
                <Dropdown.Item>{this.state.arr[2].arrtwo[0].two}</Dropdown.Item>
                <Dropdown.Item>{this.state.arr[2].arrtwo[0].three}</Dropdown.Item>
                <Dropdown.Item>{this.state.arr[2].arrtwo[0].four}</Dropdown.Item>
                </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                <Dropdown.Toggle>{
                    this.state.arr[3].menu}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item>{this.state.arr[3].arrfo[0].one}</Dropdown.Item>
                <Dropdown.Item>{this.state.arr[3].arrfo[0].two}</Dropdown.Item>
                </Dropdown.Menu>
                    </Dropdown>

                    
             
             
              </Dropdown.Menu>
            </Dropdown>
          );
    }
}

export default BasicExample;