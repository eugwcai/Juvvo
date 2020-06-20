""" Juvvo
    Date: 6/19/2020
    Authors: Eugene Cai, Rishi Verma
    Usage: Enter load csv from dir to produce html code."""

import pandas as pd

#Pass csv into .read_csv method
df = pd.read_csv("ankle_symptoms.csv")
#Specify Body part
body_part = "Ankle"

#Set your ids -- THIS WILL CHANGE FOR EACH BODY PART. Unfortunately we can't escape doing this manually.
#There should be an id for each symptom in the csv Not Including output
ids = ['ankle-acute-symptom','ankle-swelling-symptom','ankle-bruising-symptom',
       'ankle-weight-bearing-symptom','ankle-loud-pop-symptom',
       'ankle-stiffness-symptom']

symptom_dict = {df.columns[i]:ids[i] for i in range(len(df.columns[:-1]))}


html_str = f"""
<div id = "ankle" style = "display:none">
     <div style = "float:right; font-size:30px; cursor:pointer
         ;" class = "panel-toggle">&#1005;</div>
       <h2>{body_part} Symptoms"</h2>
       <div class = "panel panel-default">
            <div class = "panel-body"> """



second_string = ""
for symptom, id in symptom_dict.items():
    second_string+=(f""" <div>
            <label>'{symptom}'</label>
            <select class="col-lg-5 diagnostic-response" id='{id}'>
                         <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>""")

last_chunk = f"""<input type="button" id="{body_part}-Symptoms" value="Submit"/>
                    </div>
                </div>
            </div>"""

final_html = html_str + second_string + " " + "</div>" + " " + last_chunk
with open(f"{body_part}.html", "w") as file:
    file.write(final_html)


