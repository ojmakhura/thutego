// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::curriculum::year::YearService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.curriculum.year;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import bw.co.roguesystems.thutego.curriculum.year.YearDao;
import bw.co.roguesystems.thutego.curriculum.year.YearRepository;
import bw.co.roguesystems.thutego.curriculum.year.YearServiceBase;
import bw.co.roguesystems.thutego.curriculum.year.YearVO;

import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.curriculum.year.YearService
 */
@Service("yearService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class YearServiceImpl
    extends YearServiceBase
{
    public YearServiceImpl(
        YearDao yearDao,
        YearRepository yearRepository,
        MessageSource messageSource
    ) {
        
        super(
            yearDao,
            yearRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.year.YearService#findById(Long)
     */
    @Override
    protected YearVO handleFindById(Long id)
        throws Exception
    {
        // TODO implement protected  YearVO handleFindById(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curriculum.year.YearService.handleFindById(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.year.YearService#getAll()
     */
    @Override
    protected Collection<YearVO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<YearVO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curriculum.year.YearService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.year.YearService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curriculum.year.YearService.handleRemove(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.year.YearService#save(YearVO)
     */
    @Override
    protected YearVO handleSave(YearVO curriculumLevel)
        throws Exception
    {
        // TODO implement protected  YearVO handleSave(YearVO curriculumLevel)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curriculum.year.YearService.handleSave(YearVO curriculumLevel) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.year.YearService#search(String, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<YearVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {
        // TODO implement protected  Collection<YearVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.curriculum.year.YearService.handleSearch(String criteria, Set<PropertySearchOrder> orderings) Not implemented!");
    }

}