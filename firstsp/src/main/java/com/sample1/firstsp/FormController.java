package com.sample1.firstsp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/form")
public class FormController {

@Autowired
    private FormDataService formService;


    // private final FormDataRepository formDataRepository;

    // public FormController(FormDataRepository formDataRepository) {
    //     this.formDataRepository = formDataRepository;
    // }

    @PostMapping("/submit")
    // public ResponseEntity<String> submitForm(@RequestBody FormData formData) {
    //     try {
    //         formDataRepository.save(formData);
    //         return ResponseEntity.ok("Form submitted successfully!");
    //     } catch (Exception e) {
    //         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error submitting form.");
    //     }
    // }
    public FormData addFormData(@RequestBody FormData form) {        
        return formService.addFormData(form);
    }






}
