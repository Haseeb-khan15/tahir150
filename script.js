        var gender = ("Pata nhi") ;
        var gal = (" Nafsyati");
        var line = ("Thora sa scripted tha bhai yr Bura Lazmi manna hai aapny !")
        let saveFile = () => {
            
            // Get the data from each element on the form.
            const name = document.getElementById('txtName');
            const age = document.getElementById('txtAge');
            const email = document.getElementById('txtEmail');
            const country = document.getElementById('selCountry');
            const genders = gender;
            const nama = gal;
            
            // This variable stores all the data.
            let data = 
                '\r Name: ' + name.value +  '' + nama + ' \r\n ' + 
                'Email: ' + email.value + ' \r\n ' + 
                'Age: ' +age.value + ' \r\n ' + 
                'Country: ' + country.value + ' \r\n ' +
                'Gender: ' + genders + ' \r\n ' + 
                'Number: ' + msg.value + ' \r\n ' + ' \r\n ' +
                ' ' + line;
            
            // Convert the text to BLOB.
            const textToBLOB = new Blob([data], { type: 'text/plain' });
            const sFileName = 'formData.txt';	   // The file to save the data.
    
            let newLink = document.createElement("a");
            newLink.download = sFileName;
    
            if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            }
            else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                document.body.appendChild(newLink);
            }
    
            newLink.click(); 
        }