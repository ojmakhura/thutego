// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::module::outcome::LearningOutcomeService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.module.outcome;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.module.outcome.LearningOutcomeService
 */
@Service("learningOutcomeService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class LearningOutcomeServiceImpl
    extends LearningOutcomeServiceBase
{
    public LearningOutcomeServiceImpl(
        LearningOutcomeDao learningOutcomeDao,
        LearningOutcomeRepository learningOutcomeRepository,
        MessageSource messageSource
    ) {
        
        super(
            learningOutcomeDao,
            learningOutcomeRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.roguesystems.thutego.module.outcome.LearningOutcomeService#findById(Long)
     */
    @Override
    protected LearningOutcomeVO handleFindById(Long id)
        throws Exception
    {
        // TODO implement protected  LearningOutcomeVO handleFindById(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.outcome.LearningOutcomeService.handleFindById(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.outcome.LearningOutcomeService#getAll()
     */
    @Override
    protected Collection<LearningOutcomeVO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<LearningOutcomeVO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.outcome.LearningOutcomeService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.outcome.LearningOutcomeService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.outcome.LearningOutcomeService.handleRemove(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.outcome.LearningOutcomeService#save(LearningOutcomeVO)
     */
    @Override
    protected LearningOutcomeVO handleSave(LearningOutcomeVO learningOutcome)
        throws Exception
    {
        // TODO implement protected  LearningOutcomeVO handleSave(LearningOutcomeVO learningOutcome)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.outcome.LearningOutcomeService.handleSave(LearningOutcomeVO learningOutcome) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.outcome.LearningOutcomeService#search(String, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<LearningOutcomeVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {
        // TODO implement protected  Collection<LearningOutcomeVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.outcome.LearningOutcomeService.handleSearch(String criteria, Set<PropertySearchOrder> orderings) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.outcome.LearningOutcomeService#findModuleOutcomes(Long)
     */
    @Override
    protected Collection<LearningOutcomeVO> handleFindModuleOutcomes(Long moduleId)
        throws Exception
    {
        // TODO implement protected  Collection<LearningOutcomeVO> handleFindModuleOutcomes(Long moduleId)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.outcome.LearningOutcomeService.handleFindModuleOutcomes(Long moduleId) Not implemented!");
    }

}