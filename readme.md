# form-field (name will change)

---

__TODOs__

- Rename (to form-model?)
- auto-fill attributes
  - label[for]
  - input[id]
  - input[name]
  - input[maxLength]
  - input[required]
- bind errors to <error-messages>
- figure out capturing submit
- figure out server error binding
- feed server errors to angular form controller
- Use JSON Schema?

---

### Usage (work in progress)

```html
<form name="vm.form"
      form-model="vm.model"
      form-model-schema="{
        name: {
          type: "string",
          required: true,
          maxLength: 30
        },
        age: {
          type: "integer",
          min: 0,
          max: 150
        },
        required: []
      }">

  <div class="form-group"
       model-field="name">

    <label class="control-label">
      Name
    </label>

    <input type="text"
           class="form-control">

    <!-- Field-level-errors -->
    <error-messages class="help-inline">
  </div>

  <!-- Form-level-errors -->
  <error-meesages>
</form>
  ```
