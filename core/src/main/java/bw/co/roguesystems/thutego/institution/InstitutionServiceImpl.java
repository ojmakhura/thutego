// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::institution::InstitutionService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.institution;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import bw.co.roguesystems.thutego.SearchObject;
import bw.co.roguesystems.thutego.SortOrderFactory;

import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.institution.InstitutionService
 */
@Service("institutionService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class InstitutionServiceImpl
    extends InstitutionServiceBase
{
    public InstitutionServiceImpl(
        InstitutionDao institutionDao,
        InstitutionRepository institutionRepository,
        MessageSource messageSource
    ) {
        
        super(
            institutionDao,
            institutionRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.roguesystems.thutego.institution.InstitutionService#findById(Long)
     */
    @Override
    protected InstitutionVO handleFindById(Long id)
        throws Exception
    {

        Institution institution = this.getInstitutionDao().load(id);
        return this.getInstitutionDao().toInstitutionVO(institution);
    }

    /**
     * @see bw.co.roguesystems.thutego.institution.InstitutionService#getAll()
     */
    @Override
    protected Collection<InstitutionVO> handleGetAll()
        throws Exception
    {

        return this.getInstitutionDao().toInstitutionVOCollection(this.getInstitutionDao().loadAll());
    }

    /**
     * @see bw.co.roguesystems.thutego.institution.InstitutionService#getAll(Integer, Integer)
     */
    @Override
    protected Page<InstitutionVO> handleGetAll(Integer pageNumber, Integer pageSize)
        throws Exception
    {
        Page<Institution> institutions = this.getInstitutionRepository().findAll(PageRequest.of(pageNumber, pageSize));

        return institutions.map(institution -> this.getInstitutionDao().toInstitutionVO(institution));
    }

    /**
     * @see bw.co.roguesystems.thutego.institution.InstitutionService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {

        this.getInstitutionDao().remove(id);
        return true;
    }

    /**
     * @see bw.co.roguesystems.thutego.institution.InstitutionService#save(InstitutionVO)
     */
    @Override
    protected InstitutionVO handleSave(InstitutionVO institution)
        throws Exception
    {

        Institution entity = this.getInstitutionDao().institutionVOToEntity(institution);
        entity = this.institutionRepository.save(entity);

        return this.getInstitutionDao().toInstitutionVO(entity);
    }

    private Specification<Institution> buildSpecification(String criteria)
    {

        if(criteria == null || criteria.isEmpty())
        {
            return null;
        }

        return (root, query, cb) -> {
            return cb.or(
                cb.like(cb.lower(root.get("name")), "%" + criteria.toLowerCase() + "%"),
                cb.like(cb.lower(root.get("description")), "%" + criteria.toLowerCase() + "%")
            );
        };
    }

    /**
     * @see bw.co.roguesystems.thutego.institution.InstitutionService#search(String, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<InstitutionVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {

        Specification<Institution> specification = this.buildSpecification(criteria);
        Sort sort = SortOrderFactory.createSortOrder(orderings);
        Collection<Institution> institutions = this.getInstitutionRepository().findAll(specification, sort);
        return this.getInstitutionDao().toInstitutionVOCollection(institutions);
    }

    /**
     * @see bw.co.roguesystems.thutego.institution.InstitutionService#search(SearchObject<InstitutionVO>)
     */
    @Override
    protected Page<InstitutionVO> handleSearch(SearchObject<String> criteria)
        throws Exception
    {

        Specification<Institution> specification = this.buildSpecification(criteria.getCriteria());
        Sort sort = SortOrderFactory.createSortOrder(criteria.getSortings());
        Page<Institution> institutions = this.getInstitutionRepository().findAll(specification, PageRequest.of(criteria.getPageNumber(), criteria.getPageSize(), sort));

        return institutions.map(institution -> this.getInstitutionDao().toInstitutionVO(institution));
    }

}