

const paginationAndSorting = (req, resp, next) => {
    const { page = "1", limit = "5", sortBy = "created_At", order = "asc" } = req.query;
    const pageNumer = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 5;

    const sortOrder = order.toLowerCase() === "desc" ? -1 : 1;
    const sortOptions = {};
    if (sortBy == "created_At") {
        sortOptions["created_At"] = 1;
    } else if (sortBy) {
        sortOptions[sortBy] = sortOrder;
    }
    req.pagination = { page: pageNumer, limit: pageSize, sortOptions };
    next();
};

module.exports = paginationAndSorting
