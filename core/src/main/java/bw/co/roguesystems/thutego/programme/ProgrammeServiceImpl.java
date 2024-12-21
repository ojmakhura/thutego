// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::programme::ProgrammeService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.programme;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.programme.ProgrammeService
 */
@Service("programmeService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class ProgrammeServiceImpl
    extends ProgrammeServiceBase
{
    public ProgrammeServiceImpl(
        ProgrammeDao programmeDao,
        ProgrammeRepository programmeRepository,
        MessageSource messageSource
    ) {
        
        super(
            programmeDao,
            programmeRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.roguesystems.thutego.programme.ProgrammeService#findById(Long)
     */
    @Override
    protected ProgrammeVO handleFindById(Long id)
        throws Exception
    {
        // TODO implement protected  ProgrammeVO handleFindById(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.programme.ProgrammeService.handleFindById(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.programme.ProgrammeService#getAll()
     */
    @Override
    protected Collection<ProgrammeVO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<ProgrammeVO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.programme.ProgrammeService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.programme.ProgrammeService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.programme.ProgrammeService.handleRemove(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.programme.ProgrammeService#save(ProgrammeVO)
     */
    @Override
    protected ProgrammeVO handleSave(ProgrammeVO programme)
        throws Exception
    {
        // TODO implement protected  ProgrammeVO handleSave(ProgrammeVO programme)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.programme.ProgrammeService.handleSave(ProgrammeVO programme) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.programme.ProgrammeService#search(String, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<ProgrammeVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {
        // TODO implement protected  Collection<ProgrammeVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.programme.ProgrammeService.handleSearch(String criteria, Set<PropertySearchOrder> orderings) Not implemented!");
    }

}