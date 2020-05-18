import List from "components/list";
import * as API from "api";
import Input from "layout/ui/input";
import * as E from "./elements";
import SearchIcon from "./media/search-24px.svg";
import ArrowUpIcon from "./media/arrow_upward-24px.svg";
import ArrowDownIcon from "./media/arrow_downward-24px.svg";
import { useRouter } from "next/router";

class QueryParams {
  constructor(query, platformList) {
    this.page = query.page || 1;
    this.parent_platforms = query.parent_platforms || "";
    this.searchSymbols = query.search || "";
    this.orderBy = (query.ordering && query.ordering.replace("-", "")) || "";
    this.order = this.orderBy && query.ordering[0] === "-" ? "-" : "" || "";
    this.platformList = platformList;
  }
  toApiQuery() {
    const _order = `${this.order}${this.orderBy}`;
    return API.makeQueryString(
      this.page,
      this.searchSymbols,
      this.parent_platforms,
      _order
    );
  }

  toBrowserQuery() {
    return `/${this.toApiQuery()}`;
  }
}

const orderList = [
  {
    type: "rating",
    name: "Rating",
  },
  {
    type: "released",
    name: "Release date",
  },
];

const Page = ({ initialData, initialPlatforms }) => {
  const router = useRouter();
  const [data, setData] = React.useState(initialData);
  const [tempSearchQuery, setTempSearchQuery] = React.useState(
    router.query.search || ""
  );
  const [isMount, setIsMount] = React.useState(false);

  const updateQueryParams = (newParams) => {
    const queryParams = new QueryParams(router.query, initialPlatforms);

    Object.keys(newParams).forEach((key) => {
      queryParams[key] = newParams[key];
    });
    router.push(queryParams.toBrowserQuery());
  };

  const getQueryParamValue = (paramName) => {
    const queryParams = new QueryParams(router.query, initialPlatforms);
    return queryParams[paramName];
  };

  React.useEffect(() => {
    setIsMount(true);
  }, []);

  React.useEffect(() => {
    if (isMount) {
      if (tempSearchQuery != (router.query.search || "")) {
        setTempSearchQuery(router.query.search || "");
      }
      const queryParams = new QueryParams(router.query, initialPlatforms);

      API.getList(queryParams.toApiQuery()).then((data) => {
        const page = queryParams.page;
        if (page > 1) {
          setData((prevData) => ({
            ...data,
            results: [...prevData.results, ...data.results],
          }));
        } else {
          setData(data);
        }
      });
    }
  }, [router.query]);

  return (
    <>
      <E.Toolbar>
        <E.SelectsWrapper>
          <E.SelectWrapper>
            <E.StyledSelect
              value={getQueryParamValue("parent_platforms")}
              onChange={(event) => {
                updateQueryParams({
                  parent_platforms: event.target.value,
                  page: 1,
                });
              }}
            >
              <option value={""}>Platform</option>
              {initialPlatforms.map((platform, i) => (
                <option value={platform.id} key={i}>
                  {platform.name}
                </option>
              ))}
            </E.StyledSelect>
          </E.SelectWrapper>

          <E.SelectWrapper>
            <E.StyledSelect
              value={getQueryParamValue("orderBy")}
              onChange={(event) => {
                updateQueryParams({
                  order: event.target.value && "-",
                  orderBy: event.target.value,
                  page: 1,
                });
              }}
            >
              <option value={""}>Order By</option>
              {orderList.map((orderBy, i) => (
                <option value={orderBy.type} key={i}>
                  {orderBy.name}
                </option>
              ))}
            </E.StyledSelect>
            {getQueryParamValue("orderBy") &&
              getQueryParamValue("order") === "-" && (
                <E.OrderIconWrapper
                  onClick={() => {
                    updateQueryParams({
                      order: "",
                      page: 1,
                    });
                  }}
                >
                  <ArrowDownIcon />
                </E.OrderIconWrapper>
              )}
            {getQueryParamValue("orderBy") &&
              getQueryParamValue("order") === "" && (
                <E.OrderIconWrapper
                  onClick={() => {
                    updateQueryParams({
                      order: "-",
                      page: 1,
                    });
                  }}
                >
                  <ArrowUpIcon />
                </E.OrderIconWrapper>
              )}
          </E.SelectWrapper>
        </E.SelectsWrapper>
        <E.StyledForm
          onSubmit={(e) => {
            e.preventDefault();
            updateQueryParams({
              page: 1,
              searchSymbols: tempSearchQuery,
            });
          }}
        >
          <Input
            label="Search"
            startIcon={<SearchIcon />}
            value={tempSearchQuery}
            onChange={(e) => {
              setTempSearchQuery(e.target.value);
            }}
          />
        </E.StyledForm>
      </E.Toolbar>
      <List
        lastItem={
          data.results.length ? data.results[data.results.length - 1].id : ""
        }
        items={data.results}
        hasMore={!!data.next}
        itemsCount={data.count}
        onLoadMore={() => {
          const page = parseInt(
            new QueryParams(router.query, initialPlatforms).page
          );

          updateQueryParams({
            page: page + 1,
          });
        }}
      />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const initialPlatforms = (await API.getPlatorms()).results;
  const queryParams = new QueryParams(query, initialPlatforms);
  const initialData = await API.getList(queryParams.toApiQuery());

  return {
    props: {
      initialData,
      initialPlatforms,
    },
  };
}

export default Page;
