/*
	
	var mois = ['janvier', 'fevrier', 'mars', 'Avril ' ,'citron', 'mai', 'juin','juillet','août','sêptembre','octobre','novembre','decembre'] ; // première méthode
   
alert(mois[2]); // Affiche "mars"

    alert(mois[5]); // Affiche ""
    alert(mois[10]);
alert(mois.join(""));

var array = ['Pomme','Tomate','poire','Citron','courgette',['Orange','Poivron']] ;
alert(array.join(""));


function exo1()
{
alert(true);
}
exof()*/
/////////////////////////////////////////////
/*
function exo2(vim)
{
var vim = "message "
alert (vim)
}
exo2()

function exo3(lun)
{
	var lun ="koral"
	alert(lun)
	var luni ="korali"
	alert(lun)
}
exo3()

 function exo4(moi)
{
	var x =prompt("number 1");
	var y = prompt("number 2");
	if (x>y) 
	{
     alert("number 1 est plus grand");
    }
    if (x<y) 
	{
     alert("number 1 est plus petite");
    }
    if (x==y) 
	{
     alert("les deux nombres sont identiques");
    }
   
  }
exo4()

function exo5(loi)
{
	var c = 3
	var n = " loli"
	alert(n+c);
}
exo5()

function exo6(mero)
{
	var hy = "bonjour"
    var nom =  "Ahmed"
    var prénom = "Dania"
    var tu = "tu as"
    var age = 20 
    var ages = "ans"
    alert(hy+nom+prénom+tu+age+ages);
}
exo6()
*/
function exo7()
{
	var ages = prompt ("ages 1");
    var genre = prompt ("femme || homme" );
    var h="homme";
    var f="femme";

	//if (aget>18)
	
	if (ages>18)

   {
		if (genre==h)
		{
			alert("vous etes un homme et vous etes majeur");
		}
	}	
	if (ages<=18)

   {
		if (genre==h)
		{
			alert("vous etes un homme et vous etes mineur");
		}
	}
	if (ages>18)

   {
		if (genre==f)
		{
			alert("vous etes une femme et vous etes mineur");
		}
	}
	if (ages<=18)

   {
		if (genre==f)
		{
			alert("vous etes une femme et vous etes majeur");
		}
	}
}	
exo7()

function exo8()
{
//  totale= n1+n2+n3; //calcule de la somme
    

var nombre1 = prompt("nombre 1");
var nombre2 = prompt (" nombre 2");
var nombre3 = prompt (" nombre 3");
var resultat= parseInt(nombre1)+parseInt(nombre2)+parseInt(nombre3);
 return alert(resultat)

}
exo8()