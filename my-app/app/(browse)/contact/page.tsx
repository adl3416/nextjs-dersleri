import { Button, ButtonGroup} from '@nextui-org/button'
import {CheckboxGroup, Checkbox} from "@nextui-org/checkbox";
import React from 'react'

const ContactPage = () => {
  return (
    <div>
       <Button color="primary">
      Button
    </Button>

    <div className="flex flex-wrap gap-4 items-center">
      <Button color="default">
        Default
      </Button>
      <Button color="primary">
        Primary
      </Button>  
      <Button color="secondary">
        Secondary
      </Button>  
      <Button color="success">
        Success
      </Button>  
      <Button color="warning">
        Warning
      </Button>  
      <Button color="danger">
        Danger
      </Button> 

    </div>

    <div><CheckboxGroup
      label="Select cities"
      orientation="horizontal"
      color="secondary"
      defaultValue={["buenos-aires", "san-francisco"]}
    >
      <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
      <Checkbox value="sydney">Sydney</Checkbox>
      <Checkbox value="san-francisco">San Francisco</Checkbox>
      <Checkbox value="london">London</Checkbox>
      <Checkbox value="tokyo">Tokyo</Checkbox>
    </CheckboxGroup> </div>
    </div>
  )
}

export default ContactPage
