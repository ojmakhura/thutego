// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::curricullum::domain::DomainService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.curricullum.domain;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import bw.co.roguesystems.thutego.SortOrderFactory;

import java.util.Collection;
import java.util.Set;

import org.springframework.context.MessageSource;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.curricullum.domain.DomainService
 */
@Service("domainService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class DomainServiceImpl
    extends DomainServiceBase
{
    public DomainServiceImpl(
        DomainDao domainDao,
        DomainRepository domainRepository,
        MessageSource messageSource
    ) {
        
        super(
            domainDao,
            domainRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.domain.DomainService#findById(Long)
     */
    @Override
    protected DomainVO handleFindById(Long id)
        throws Exception
    {

        return this.getDomainDao().toDomainVO(this.getDomainRepository().getReferenceById(id));
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.domain.DomainService#getAll()
     */
    @Override
    protected Collection<DomainVO> handleGetAll()
        throws Exception
    {

        return this.getDomainDao().toDomainVOCollection(this.getDomainRepository().findAll());
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.domain.DomainService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {

        this.getDomainRepository().deleteById(id);
        return true;
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.domain.DomainService#save(DomainVO)
     */
    @Override
    protected DomainVO handleSave(DomainVO domain)
        throws Exception
    {

        Domain entity = this.getDomainDao().domainVOToEntity(domain);

        entity = this.getDomainRepository().save(entity);

        return this.getDomainDao().toDomainVO(entity);        
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.domain.DomainService#search(String, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<DomainVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {

        Specification<Domain> spec = (root, query, cb) -> {
            return cb.or(
                cb.like(cb.lower(root.get("name")), "%" + criteria.toLowerCase() + "%"),
                cb.like(cb.lower(root.get("code")), "%" + criteria.toLowerCase() + "%")
            );
        };

        Sort sort = SortOrderFactory.createSortOrder(orderings);

        if (sort == null) {
            
            return this.getDomainDao().toDomainVOCollection(this.getDomainRepository().findAll(spec));
        }

        return this.getDomainDao().toDomainVOCollection(this.getDomainRepository().findAll(spec, sort));
    }

}