const demographic_form = {
    type: jsPsychSurveyHtmlForm,
    data: {
        "page_type": "participant_survey",
    },
    html: '<div style="max-width:980px; text-align:center;"><p>' +
        'What factors influenced how you decided to respond? <br> Do you have any feedback regarding the experiment?' +
        '</p> <textarea name="feedback" cols="50" rows="6"' +
        ' "autofocus"></textarea><p> We would like to know a little ' +
        'about the people participating in this study. </p> <div style="text-' +
        'align:center;"> <div style="text-align:left; display:' +
        'inline-block; margin-right:20px; line-height:1.8em;"><ol>' +
        '<li>Age:</li><br><br>' +
        '<li>Gender:</li><br><br><br>' +
        '<li>Race:</li><br><br><br><br><br>' +
        '<li>Ethnicity:</li><br>' +
        '<li>To what extent do you consider<br>yourself a religious person</li><br><br><br><br>' +
        '<li>How would you describe yourself?</li>' +
        '</ol></div>' +
        '<div style="text-align:left; display: inline-block;' +
        ' line-height:1.8em;">' +
        // age text box
        '<input name="age" type="number"  min="18" max="100" required/><br><br>' +
        // gender options
        '<input name="gender" type="radio" id="woman" value=' +
        '"Woman" required/> <label for="woman"> Woman </label>' +
        '<input name="gender" type="radio" id="man" value=' +
        '"Man" required/> <label for="man"> Man </label>' +
        '<input name="gender" type="radio" id="nonbinary" value=' +
        '"Non-binary" required/> <label for="nonbinary"> Non-binary </label> <br>' +
        '<input name="gender" type="radio" id="other_gender" value=' +
        '"other_gender" required/> <label for="other_gender"> Other: <input' +
        ' type="text" name="other_gender" /> </label><br><br><br>' +
        // race options
        '<input name="race" type="radio" id="white" value=' +
        '"White" required/> <label for="white"> White </label> <br>' +
        '<input name="race" type="radio" id="black" value=' +
        '"Black/African American" required/> <label for="black">' +
        ' Black/African American </label> <br>' +
        '<input name="race" type="radio" id="am_ind" value=' +
        '"American Indian/Alaska Native" required/> <label for="am_ind">' +
        ' American Indian/Alaska Native </label> <br>' +
        '<input name="race" type="radio" id="asian" value=' +
        '"Asian" required/> <label for="asian"> Asian </label> <br>' +
        '<input name="race" type="radio" id="pac_isl" value=' +
        '"Native Hawaiian/Pacific Islander" required/> <label for="pac_isl">' +
        ' Native Hawaiian/Pacific Islander </label> <br>' +
        '<input name="race" type="radio" id="other_race" value="other_race" required/>' +
        '<label for="other_race"> Other: <input type="text"' +
        'name="other_race" /> </label><br><br>' +
        // ethnicity options
        '<input name="ethnicity" type="radio" id="hisp" value=' +
        '"Hispanic" required/> <label for="hisp"> Hispanic </label>' +
        '<input name="ethnicity" type="radio" id="nonhisp" value=' +
        '"Non-Hispanic" required/> <label for="nonhisp"> Non-Hispanic' +
        ' </label><br><br>' +
        // religious status
        '<input name="religious" type="radio" id="not at all" value=' +
        '"Not at all" required/> <label for="not at all"> Not at all </label> <br>' +
        '<input name="religious" type="radio" id="slightly" value=' +
        '"Slightly" required/> <label for="slightly">' +
        ' Slightly </label> <br>' +
        '<input name="religious" type="radio" id="moderately" value=' +
        '"Moderately" required/> <label for="moderately">' +
        ' Moderately </label> <br>' +
        '<input name="religious" type="radio" id="very" value=' +
        '"Very" required/> <label for="very"> Very </label> <br>' +
        '<input name="religious" type="radio" id="extremely" value=' +
        '"Extremely" required/> <label for="extremely">' +
        ' Extremely </label><br><br>' +
        // religion type
        '<select id="religion" name="religion" required><br>' +
        '<option value="" disabled selected>--Please choose an option--</option>' +
        '<option value="Protestant Christian">Protestant Christian</option>' +
        '<option value="Catholic Christian">Catholic Christian</option>' +
        '<option value="Orthodox Christian">Orthodox Christian</option>' +
        '<option value="Atheist">Atheist</option>' +
        '<option value="Agnostic">Agnostic</option>' +
        '<option value="Jewish">Jewish</option>' +
        '<option value="Muslim">Muslim</option>' +
        '<option value="Hindu">Hindu</option>' +
        '<option value="Buddhist">Buddhist</option>' +
        '<option value="Other religion">Other religion</option>' +
        '<option value="None of the above">None of the above</option>' +
        '</select>' +
        '</div> </div>' +
        '<p> Please press Submit to complete your participation in this study.</p> </div>',
    button_label: 'Submit',
};
