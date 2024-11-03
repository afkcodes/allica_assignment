# Button

Button component is used for interacton, enables users to make decisions and take actions by clicking on it with their mouse cursor, or tapping with their finger on mobile devices.

## Variants

- Primary
- Secondary
- Ghost

## Usage

> ### Primary

``` ts
  <Button 
    variant='primary' 
    onClick={()=>{console.log("clicked button")}}>
    Primary Button
  </Button>
```

> ### Secondary

``` ts
  <Button 
    variant='secondary' 
    onClick={()=>{console.log("clicked button")}}>
    Secondary Button
  </Button>
```

> ### Ghost

``` ts
  <Button 
    variant='ghost' 
    onClick={()=>{console.log("clicked button")}}>
    ghost Button
  </Button>
```

> ### Full Width

``` ts
  <Button 
    variant='primary'
    fullWidth
    onClick={()=>{console.log("clicked button")}}>
    Primary Button
  </Button>
```
