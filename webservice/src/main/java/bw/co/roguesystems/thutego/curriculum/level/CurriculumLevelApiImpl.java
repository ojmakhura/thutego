// license-header java merge-point
//
// Attention: Generated code! Do not modify by hand!
// Generated by SpringWSImpl.java.vsl in andromda-webservices.
//
package bw.co.roguesystems.thutego.curriculum.level;

import java.time.LocalDateTime;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/curriculum/level")
@CrossOrigin()
public class CurriculumLevelApiImpl extends CurriculumLevelApiBase {

    public CurriculumLevelApiImpl(
            CurriculumLevelService curriculumLevelService) {

        super(
                curriculumLevelService);
    }

    @Override
    public ResponseEntity<?> handleFindById(Long id) {
        try {
            Optional<?> data = Optional.of(this.curriculumLevelService.findById(id));
            ResponseEntity<?> response;

            if (data.isPresent()) {
                response = ResponseEntity.status(HttpStatus.OK).body(data.get());
            } else {
                response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            return response;
        } catch (Exception e) {
            logger.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> handleGetAll() {
        try {
            Optional<?> data = Optional.of(curriculumLevelService.getAll()); // TODO: Add custom code here;
            ResponseEntity<?> response;

            if (data.isPresent()) {
                response = ResponseEntity.status(HttpStatus.OK).body(data.get());
            } else {
                response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            return response;
        } catch (Exception e) {
            logger.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> handleRemove(Long id) {
        try {
            Optional<?> data = Optional.of(curriculumLevelService.remove(id)); // TODO: Add custom code here;
            ResponseEntity<?> response;

            if (data.isPresent()) {
                response = ResponseEntity.status(HttpStatus.OK).body(data.get());
            } else {
                response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            return response;
        } catch (Exception e) {
            logger.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> handleSave(CurriculumLevelVO curriculumLevel) {
        try {

            if (curriculumLevel.getId() == null) {

                curriculumLevel.setCreatedAt(LocalDateTime.now());
                curriculumLevel.setCreatedBy("SYSTEM");
            } else {

                curriculumLevel.setModifiedAt(LocalDateTime.now());
                curriculumLevel.setModifiedBy("SYSTEM");
            }

            Optional<?> data = Optional.of(curriculumLevelService.save(curriculumLevel)); // TODO: Add custom code here;
            ResponseEntity<?> response;

            if (data.isPresent()) {
                response = ResponseEntity.status(HttpStatus.OK).body(data.get());
            } else {
                response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            return response;
        } catch (Exception e) {
            logger.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> handleSearch(String criteria) {
        try {
            System.out.println(criteria);
            Optional<?> data = Optional.of(curriculumLevelService.search(criteria, null)); // TODO: Add custom code
                                                                                           // here;
            ResponseEntity<?> response;

            if (data.isPresent()) {
                response = ResponseEntity.status(HttpStatus.OK).body(data.get());
            } else {
                response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            return response;
        } catch (Exception e) {
            logger.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}