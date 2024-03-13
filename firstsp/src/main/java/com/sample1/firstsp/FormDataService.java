package com.sample1.firstsp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FormDataService {
    @Autowired
    private  FormDataRepository formDataRepository;

  
    public FormDataService(FormDataRepository formDataRepository) {
        this.formDataRepository = formDataRepository;
    }

    // Method to fetch all form data
    public List<FormData> getAllFormData() {
        return formDataRepository.findAll();
    }

    @SuppressWarnings("null")
    public FormData addFormData(FormData form) {
       
        return formDataRepository.save(form);
    }

    // Method to fetch form data by ID
//     public FormData getFormDataById(Long id) {
//         return formDataRepository.findById(id).;
                
//     }
}
