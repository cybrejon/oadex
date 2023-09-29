<!-- took everything straight off of https://www.w3schools.com/howto/howto_css_custom_checkbox.asp -->

<script>
  export let checked;
</script>

<label>
  <slot />
  <input bind:checked type="checkbox">
  <span></span>
</label>

<style>
  label {
    display: block;
    position: relative;
    padding-left: 35px;
    padding-top: 5px;
    padding-right: 5px;
    cursor: pointer;
    font-size: .8rem;
    font-weight: 600;
    height: 25px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    border-radius: 30px;
    position: absolute;
    top: 0;
    left: 1px;
    height: 25px;
    width: 25px;
    background-color: #2E3035;
    outline-offset: 3px;
  }

  label:hover input ~ span {
    background-color: #4E5056;
  }

  label:active input ~ span {
    outline: 2px dashed #CDFE05;
  }

  label input:checked ~ span {
    background-color: #4E5056;
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  label input:checked ~ span:after {
    display: block;
  }

  label span:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>