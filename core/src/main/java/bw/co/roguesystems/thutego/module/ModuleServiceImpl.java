// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::module::ModuleService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.module;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.module.ModuleService
 */
@Service("moduleService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class ModuleServiceImpl
    extends ModuleServiceBase
{
    public ModuleServiceImpl(
        ModuleDao moduleDao,
        ModuleRepository moduleRepository,
        MessageSource messageSource
    ) {
        
        super(
            moduleDao,
            moduleRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.roguesystems.thutego.module.ModuleService#findById(Long)
     */
    @Override
    protected ModuleVO handleFindById(Long id)
        throws Exception
    {
        // TODO implement protected  ModuleVO handleFindById(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.ModuleService.handleFindById(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.ModuleService#getAll()
     */
    @Override
    protected Collection<ModuleListVO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<ModuleListVO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.ModuleService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.ModuleService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.ModuleService.handleRemove(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.ModuleService#save(ModuleVO)
     */
    @Override
    protected ModuleVO handleSave(ModuleVO module)
        throws Exception
    {
        // TODO implement protected  ModuleVO handleSave(ModuleVO module)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.ModuleService.handleSave(ModuleVO module) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.ModuleService#search(ModuleSearchCriteria, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<ModuleListVO> handleSearch(ModuleSearchCriteria criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {
        // TODO implement protected  Collection<ModuleListVO> handleSearch(ModuleSearchCriteria criteria, Set<PropertySearchOrder> orderings)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.ModuleService.handleSearch(ModuleSearchCriteria criteria, Set<PropertySearchOrder> orderings) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.ModuleService#findCurriculumModules(Long)
     */
    @Override
    protected ModuleListVO handleFindCurriculumModules(Long curriculumId)
        throws Exception
    {
        // TODO implement protected  ModuleListVO handleFindCurriculumModules(Long curriculumId)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.ModuleService.handleFindCurriculumModules(Long curriculumId) Not implemented!");
    }

}