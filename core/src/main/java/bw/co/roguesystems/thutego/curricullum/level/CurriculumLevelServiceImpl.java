// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::curricullum::level::CurriculumLevelService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.curricullum.level;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelService
 */
@Service("curriculumLevelService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class CurriculumLevelServiceImpl
    extends CurriculumLevelServiceBase
{
    public CurriculumLevelServiceImpl(
        CurriculumLevelDao curriculumLevelDao,
        CurriculumLevelRepository curriculumLevelRepository,
        MessageSource messageSource
    ) {
        
        super(
            curriculumLevelDao,
            curriculumLevelRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelService#findById(Long)
     */
    @Override
    protected CurriculumLevelVO handleFindById(Long id)
        throws Exception
    {
        // TODO implement protected  CurriculumLevelVO handleFindById(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelService.handleFindById(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelService#getAll()
     */
    @Override
    protected Collection<CurriculumLevelVO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<CurriculumLevelVO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelService.handleRemove(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelService#save(CurriculumLevelVO)
     */
    @Override
    protected CurriculumLevelVO handleSave(CurriculumLevelVO curriculumLevel)
        throws Exception
    {
        // TODO implement protected  CurriculumLevelVO handleSave(CurriculumLevelVO curriculumLevel)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelService.handleSave(CurriculumLevelVO curriculumLevel) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelService#search(String, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<CurriculumLevelVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {
        // TODO implement protected  Collection<CurriculumLevelVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelService.handleSearch(String criteria, Set<PropertySearchOrder> orderings) Not implemented!");
    }

}