// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::curricullum::outcome::ExitLevelOutcomeService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.curricullum.outcome;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.curricullum.outcome.ExitLevelOutcomeService
 */
@Service("exitLevelOutcomeService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class ExitLevelOutcomeServiceImpl
    extends ExitLevelOutcomeServiceBase
{
    public ExitLevelOutcomeServiceImpl(
        ExitLevelOutcomeDao exitLevelOutcomeDao,
        ExitLevelOutcomeRepository exitLevelOutcomeRepository,
        MessageSource messageSource
    ) {
        
        super(
            exitLevelOutcomeDao,
            exitLevelOutcomeRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.outcome.ExitLevelOutcomeService#findById(Long)
     */
    @Override
    protected ExitLevelOutcomeVO handleFindById(Long id)
        throws Exception
    {
        // TODO implement protected  ExitLevelOutcomeVO handleFindById(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.outcome.ExitLevelOutcomeService.handleFindById(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.outcome.ExitLevelOutcomeService#getAll()
     */
    @Override
    protected Collection<ExitLevelOutcomeVO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<ExitLevelOutcomeVO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.outcome.ExitLevelOutcomeService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.outcome.ExitLevelOutcomeService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.outcome.ExitLevelOutcomeService.handleRemove(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.outcome.ExitLevelOutcomeService#save(ExitLevelOutcomeVO)
     */
    @Override
    protected ExitLevelOutcomeVO handleSave(ExitLevelOutcomeVO exitLevelOutcome)
        throws Exception
    {
        // TODO implement protected  ExitLevelOutcomeVO handleSave(ExitLevelOutcomeVO exitLevelOutcome)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.outcome.ExitLevelOutcomeService.handleSave(ExitLevelOutcomeVO exitLevelOutcome) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.outcome.ExitLevelOutcomeService#search(String, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<ExitLevelOutcomeVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {
        // TODO implement protected  Collection<ExitLevelOutcomeVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.outcome.ExitLevelOutcomeService.handleSearch(String criteria, Set<PropertySearchOrder> orderings) Not implemented!");
    }

}