// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::curricullum::CurriculumService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.curricullum;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import bw.co.roguesystems.thutego.SearchObject;
import bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelDao;
import bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelRepository;
import bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelVO;
import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.curricullum.CurriculumService
 */
@Service("curriculumService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class CurriculumServiceImpl
    extends CurriculumServiceBase
{
    public CurriculumServiceImpl(
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
     * @see bw.co.roguesystems.thutego.curricullum.CurriculumService#findById(Long)
     */
    @Override
    protected CurriculumVO handleFindById(Long id)
        throws Exception
    {
        // TODO implement protected  CurriculumVO handleFindById(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.CurriculumService.handleFindById(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.CurriculumService#getAll()
     */
    @Override
    protected Collection<CurriculumListVO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<CurriculumListVO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.CurriculumService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.CurriculumService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.CurriculumService.handleRemove(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.CurriculumService#save(CurriculumLevelVO)
     */
    @Override
    protected CurriculumVO handleSave(CurriculumLevelVO curriculumLevel)
        throws Exception
    {
        // TODO implement protected  CurriculumVO handleSave(CurriculumLevelVO curriculumLevel)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.CurriculumService.handleSave(CurriculumLevelVO curriculumLevel) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.CurriculumService#search(CurriculumSearchCriteria, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<CurriculumListVO> handleSearch(CurriculumSearchCriteria criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {
        // TODO implement protected  Collection<CurriculumListVO> handleSearch(CurriculumSearchCriteria criteria, Set<PropertySearchOrder> orderings)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.CurriculumService.handleSearch(CurriculumSearchCriteria criteria, Set<PropertySearchOrder> orderings) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.CurriculumService#getAll(Integer, Integer)
     */
    @Override
    protected Page<CurriculumListVO> handleGetAll(Integer pageNumber, Integer pageSize)
        throws Exception
    {
        // TODO implement protected  Page<CurriculumListVO> handleGetAll(Integer pageNumber, Integer pageSize)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.CurriculumService.handleGetAll(Integer pageNumber, Integer pageSize) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.CurriculumService#search(SearchObject<CurriculumSearchCriteria>)
     */
    @Override
    protected Collection<Page<CurriculumListVO>> handleSearch(SearchObject<CurriculumSearchCriteria> criteria)
        throws Exception
    {
        // TODO implement protected  Collection<Page<CurriculumListVO>> handleSearch(SearchObject<CurriculumSearchCriteria> criteria)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curricullum.CurriculumService.handleSearch(SearchObject<CurriculumSearchCriteria> criteria) Not implemented!");
    }

}