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
- figure out submit binding
- figure out server error binding
- feed
---

### Usage (work in progress)

```html
<form name="vm.form"
      model="vm.model"
      model-spec="{
        name: {
          required: true,
          maxLength: 30,

        }
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
