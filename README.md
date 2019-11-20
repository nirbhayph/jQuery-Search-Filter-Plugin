# jQuery Search Filter Plugin

Sample usage link - https://nirbhay.me/jQuery-Search-Filter-Plugin

Custom plugin template sourced from http://stefangabos.ro/jquery/jquery-plugin-boilerplate/

Sample built on top of boiler plate code from bootstrap.

## Sample Usage

### HTML 
```
<!-- Example HTML Code -->
    <div class="container">
        <h4>Example 2 - With Simple List Group [Case Sensitive]</h4>

        <!-- Text Input -->
        <div class="active-cyan-3 active-cyan-4 mb-4">
                <input id="list-search-2" class="form-control" type="text" placeholder="Try Searching ..." aria-label="Search">
        </div>
        <!-- Text Input Ends -->

        <ul class="list-group" id="my-list-items-2">
            <li class="list-group-item">This is a list group item</li>
            <li class="list-group-item list-group-item-primary">This is a primary list group item</li>
            <li class="list-group-item list-group-item-secondary">This is a secondary list group item</li>
            <li class="list-group-item list-group-item-primary">This is a primary list group item</li>
            <li class="list-group-item list-group-item-secondary">This is a secondary list group item</li>
            <li class="list-group-item list-group-item-primary">This is a primary list group item</li>
            <li class="list-group-item list-group-item-secondary">This is a secondary list group item</li>
            <li class="list-group-item list-group-item-primary">This is a primary list group item</li>
            <li class="list-group-item list-group-item-secondary">This is a secondary list group item</li>
        </ul>
    </div>    
<!-- Example HTML Ends -->
```

### Plugin Usage

```
<script>
        $("#list-search").filterElements({
            parentElementWrapper: "#my-list-items",
            childElementToFilter: '.list-group-item',            
            caseInsensitive: true
        });
</script>
```

- There are other option like 'controlNext' which controls the display of the sibling child element.
- Also the text and background colors can be changed for the child elements if marking is enabled.
- You can use it to filter other elements like accordions or any other kind of list items too. 
- Have fun using the plugin!

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Developers:
- @nirbhayph - https://github.com/nirbhayph | https://linkedin.com/in/nirbhaypherwani

## Acknowledgements and Mentions:
- Stefan Gabos - http://stefangabos.ro
- Bootstrap - https://getbootstrap.com/
