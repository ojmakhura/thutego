// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::stratergies::assessment::AssessmentStratergyService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.stratergies.assessment;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.stratergies.assessment.AssessmentStratergyService
 */
@Service("assessmentStratergyService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class AssessmentStratergyServiceImpl
    extends AssessmentStratergyServiceBase
{
    public AssessmentStratergyServiceImpl(
        AssessmentStratergyDao assessmentStratergyDao,
        AssessmentStratergyRepository assessmentStratergyRepository,
        MessageSource messageSource
    ) {
        
        super(
            assessmentStratergyDao,
            assessmentStratergyRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.roguesystems.thutego.stratergies.assessment.AssessmentStratergyService#findById(Long)
     */
    @Override
    protected AssessmentStrategyVO handleFindById(Long id)
        throws Exception
    {
        // TODO implement protected  AssessmentStrategyVO handleFindById(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.stratergies.assessment.AssessmentStratergyService.handleFindById(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.stratergies.assessment.AssessmentStratergyService#getAll()
     */
    @Override
    protected Collection<AssessmentStrategyVO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<AssessmentStrategyVO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.stratergies.assessment.AssessmentStratergyService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.stratergies.assessment.AssessmentStratergyService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.stratergies.assessment.AssessmentStratergyService.handleRemove(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.stratergies.assessment.AssessmentStratergyService#save(AssessmentStrategyVO)
     */
    @Override
    protected AssessmentStrategyVO handleSave(AssessmentStrategyVO trainingStratergy)
        throws Exception
    {
        // TODO implement protected  AssessmentStrategyVO handleSave(AssessmentStrategyVO trainingStratergy)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.stratergies.assessment.AssessmentStratergyService.handleSave(AssessmentStrategyVO trainingStratergy) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.stratergies.assessment.AssessmentStratergyService#search(String, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<AssessmentStrategyVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {
        // TODO implement protected  Collection<AssessmentStrategyVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.stratergies.assessment.AssessmentStratergyService.handleSearch(String criteria, Set<PropertySearchOrder> orderings) Not implemented!");
    }

}