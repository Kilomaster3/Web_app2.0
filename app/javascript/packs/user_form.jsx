<form role='form' accept-charset="UTF-8" action='/action' method='post'>
   <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
  

  <div class="field">
    <label for="user_name">name</label><br>
    <label for= "user_password">user_password</label><br>
    <input placeholder="" type="text" name="user[name]" id="user_name" />
  </div>


  <div class="actions">
    <input type="submit" name="commit" value=" Save addings" class="button tiny" />
  </div>

</form>