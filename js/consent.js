const time = '5 minutes';

const consent = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><b>Consent Form</b></p> <div style="text-align:left;' +
        'background-color:lightblue; padding:20px; max-width:900px;">' +
        '<p><b>Description:</b> Welcome! We are conducting a research' +
        ' study to examine intuitions about purposes.</p>' +
        '<p><b>Procedure:</b> Participation in this study will involve' +
        ' filling out a questionnaire. We anticipate that your involvement' +
        ' will require approximately 2-5 minutes. You will be compensated' +
        ' for participating. You must be at least 18 years old to participate.</p>' +
        ' <p><b>Risks and benefits:</b> We anticipate minimal risk. You will' +
        ' be paid for participation through Prolific. We hope that our results' +
        ' will add to scientific knowledge about ordinary intuitions. </p>' +
        '<p><b>Confidentiality:</b> All of your responses will be anonymous.' +
        ' Only the researchers involved in this study and those responsible' +
        ' for research oversight will have access to the information you provide.</p>' +
        '<p><b> Payment:</b> You will be paid through Prolific.</p>' +
        '<p><b>Voluntary Participation:</b> Participation in this study is' +
        ' completely voluntary. You are free to decline to participate,' +
        ' to end participation at any time for any reason, or to refuse' +
        ' to answer any individual question without penalty.</p>' +
        '<p><b>Questions:</b> If you have any questions about this study,' +
        ' you may contact Joshua Knobe at joshua.knobe@yale.edu</p></div>' +
        '<p> Do you agree with the terms of the experiment as explained' +
        ' above? </p>',
    choices: ['I agree'],
};
