"""
Juvvo
Date: 6/21/2020
Authors: Eugene Cai, Rishi Verma
Usage: Auto generate js  for streamlined code generation.
The lines of code that need to be altered for usage are:
ln 14, 17, 20, 25, 28

"""

import pandas as pd

#Replace 'ankle' with the body part you need
body_part = 'ankle'

#Load csv.
df = pd.read_csv(r"C:\Users\RVerm\juvvo\data\ankle_symptoms.csv")

#Generate a list of symptoms that you would like to appear in the js code
ids = ['ankle-acute-symptom','ankle-swelling-symptom','ankle-bruising-symptom',
       'ankle-weight-bearing-symptom','ankle-loud-pop-symptom',
       'ankle-stiffness-symptom']

#Generate list of alias tags
alias = ['ass','asws','abs','aws','aps','asts']

#Generate list of existing body parts in repo
existing_list = ['back','elbow','knee','quad', 'shoulder']

def main():
    alias_dict = get_alias(ids,alias)
    tag_dict = get_tag_dict(df, alias)
    js_if = get_js_code(alias_dict, tag_dict)
    js_nav = get_nav_labels(existing_list)

    return js_if + "\n" + js_nav

def get_alias(symptom_list, alias_list):
    alias_dict = {symptom_list[i]: alias_list[i] for i in range(len(symptom_list))}
    return alias_dict

def get_tag_dict(df,alias):
    tag_dict = {df.columns[i]: alias[i] for i in range(len(df.columns[:-1]))}
    return tag_dict

def get_js_code(alias_dict, tag_dict):
    first_chunk = f"""$("#{body_part}-submit-symptoms").on("click", function()"""
    javascript = ""
    for symptom, tag in alias_dict.items():
        javascript += (f"""var {tag} = $("#{symptom}").find(":selected").val();\n""")
    mid_chunk = f"""for(var i = 0; i < {body_part}_symptoms_dict.length; i++)""" + " " + "{" + " " + "\n" + "if("
    for symptom, abbreviation in tag_dict.items():
        mid_chunk += f"""{body_part}_symptoms_dict[i]["{symptom}"] == {abbreviation}] && \n"""
    end_chunk = f"""console.log({body_part}_symptoms_dict[i]["Output"]);\n$("#output").text({body_part}_symptoms_dict[i]["Output"]);"""

    return first_chunk + javascript + mid_chunk[:-4] + ")" + "{" + "\n" + end_chunk + "\n" + " "*12 + "}" + "\n" + " "*8 + "}" + "\n" + " "*4 + "});"

def get_nav_labels(existing_body_parts_list):
    first_chunk = f"""$("#nav-{body_part}").on("click",function()""" + "{" "\n" + f"""$("#nav-{body_part}").addClass("active");""" + "\n"
    for part in existing_body_parts_list:
        first_chunk += f"""$("#nav-{part}").removeClass("active");""" + "\n"
    second_chunk = f"""$("#{body_part}").css('display','block');""" + "\n"
    for part in existing_body_parts_list:
        second_chunk += f"""$("#{part}").css('display','none');""" +"\n"

    return first_chunk + second_chunk  + """$("#output").text("");""" + "\n" + " "*4 + "});"

if __name__=="__main__":
    finished_js = main()
    with open(f"{body_part}.js", "w") as file:
        file.write(finished_js)




